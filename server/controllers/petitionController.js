import Petition from '../models/Petition.js';
import mongoose from 'mongoose';

// Fallback in-memory store in case MongoDB is offline during local test
let memoryPetitions = [
  {
    _id: 'MEM-001',
    fullName: 'Lord Julian Sterling',
    email: 'j.sterling@sterlingcapital.uk',
    phone: '+44 20 7946 0991',
    title: 'Managing Principal',
    organization: 'Sterling & Co. Single Family Office',
    city: 'London',
    capitalBracket: '$250M - $1B',
    nominatedBy: 'Lord Mountbatten Advisory Circle',
    statement: 'Seeking alignment with sovereign heritage preservation capital and discrete fellow principals across South Asia and Europe.',
    status: 'ACCEPTED',
    salonPreferences: ['The Royal Banquet', 'The Roundtable'],
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'MEM-002',
    fullName: 'Shikha Singhania',
    email: 'shikha@paramount-sovereign.in',
    phone: '+91 98200 44123',
    title: 'Chief Investment Officer',
    organization: 'Paramount Heritage Capital & Foundation',
    city: 'Jaipur / Mumbai',
    capitalBracket: '$50M - $250M',
    nominatedBy: 'Self-Petition',
    statement: 'Direct steward of 3rd generation legacy capital. Focused on high-impact cultural arts patronage and multi-sovereign alliances.',
    status: 'UNDER_REVIEW',
    salonPreferences: ['The Imperial Soirée', 'The Roundtable'],
    createdAt: new Date().toISOString(),
  },
];

const isDbConnected = () => mongoose.connection.readyState === 1;

// @desc    Submit an invitation petition
// @route   POST /api/invitations
export const createPetition = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      phone,
      title,
      organization,
      city,
      capitalBracket,
      nominatedBy,
      statement,
      salonPreferences,
    } = req.body;

    if (!fullName || !email || !title || !organization || !city || !statement) {
      return res.status(400).json({
        success: false,
        message: 'All mandatory dossier fields must be completed for consideration.',
      });
    }

    if (isDbConnected()) {
      const petition = await Petition.create({
        fullName,
        email,
        phone,
        title,
        organization,
        city,
        capitalBracket,
        nominatedBy,
        statement,
        salonPreferences,
      });

      return res.status(201).json({
        success: true,
        message: 'Petition received. Your dossier has been sealed for High Advisory review.',
        dossierId: petition._id,
        data: petition,
      });
    } else {
      const newDossier = {
        _id: 'PET-' + Date.now().toString().slice(-6),
        fullName,
        email,
        phone,
        title,
        organization,
        city,
        capitalBracket: capitalBracket || '$50M - $250M',
        nominatedBy: nominatedBy || 'Direct Petition',
        statement,
        salonPreferences: salonPreferences || [],
        status: 'UNDER_REVIEW',
        createdAt: new Date().toISOString(),
      };
      memoryPetitions.unshift(newDossier);

      return res.status(201).json({
        success: true,
        message: 'Petition received. Your dossier has been sealed for High Advisory review (Stored in Active Session).',
        dossierId: newDossier._id,
        data: newDossier,
      });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Get all petitions (Advisory Board View)
// @route   GET /api/invitations
export const getPetitions = async (req, res, next) => {
  try {
    const { status, city, search } = req.query;

    if (isDbConnected()) {
      const query = {};
      if (status && status !== 'ALL') query.status = status;
      if (city) query.city = new RegExp(city, 'i');
      if (search) {
        query.$or = [
          { fullName: new RegExp(search, 'i') },
          { organization: new RegExp(search, 'i') },
          { email: new RegExp(search, 'i') },
        ];
      }

      const petitions = await Petition.find(query).sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        count: petitions.length,
        data: petitions,
      });
    } else {
      let filtered = [...memoryPetitions];
      if (status && status !== 'ALL') {
        filtered = filtered.filter((p) => p.status === status);
      }
      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(
          (p) =>
            p.fullName.toLowerCase().includes(s) ||
            p.organization.toLowerCase().includes(s) ||
            p.city.toLowerCase().includes(s)
        );
      }
      return res.status(200).json({
        success: true,
        count: filtered.length,
        data: filtered,
      });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Update petition status
// @route   PATCH /api/invitations/:id
export const updatePetitionStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    if (isDbConnected()) {
      const petition = await Petition.findByIdAndUpdate(
        id,
        { status, ...(notes !== undefined && { notes }) },
        { new: true }
      );
      if (!petition) {
        return res.status(404).json({ success: false, message: 'Dossier not found' });
      }
      return res.status(200).json({ success: true, data: petition });
    } else {
      const target = memoryPetitions.find((p) => p._id === id);
      if (!target) {
        return res.status(404).json({ success: false, message: 'Dossier not found' });
      }
      if (status) target.status = status;
      if (notes !== undefined) target.notes = notes;
      return res.status(200).json({ success: true, data: target });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Advisory Dashboard Statistics
// @route   GET /api/invitations/stats
export const getStats = async (req, res, next) => {
  try {
    if (isDbConnected()) {
      const total = await Petition.countDocuments();
      const underReview = await Petition.countDocuments({ status: 'UNDER_REVIEW' });
      const accepted = await Petition.countDocuments({ status: 'ACCEPTED' });
      const waitlisted = await Petition.countDocuments({ status: 'WAITLISTED' });

      return res.status(200).json({
        success: true,
        stats: { total, underReview, accepted, waitlisted },
      });
    } else {
      const total = memoryPetitions.length;
      const underReview = memoryPetitions.filter((p) => p.status === 'UNDER_REVIEW').length;
      const accepted = memoryPetitions.filter((p) => p.status === 'ACCEPTED').length;
      const waitlisted = memoryPetitions.filter((p) => p.status === 'WAITLISTED').length;

      return res.status(200).json({
        success: true,
        stats: { total, underReview, accepted, waitlisted },
      });
    }
  } catch (error) {
    next(error);
  }
};
