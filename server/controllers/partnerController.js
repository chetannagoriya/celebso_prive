import PartnerInquiry from '../models/PartnerInquiry.js';
import mongoose from 'mongoose';

let memoryPartners = [
  {
    _id: 'PRT-001',
    institutionName: 'Maison de Haute Horlogerie Genève',
    contactPerson: 'Alexandre Laurent',
    email: 'a.laurent@maison-geneve.ch',
    pillar: 'Heritage & Maison',
    proposalSummary: 'Curation of a private archival horology exhibit and private tasting salon during the Jaipur Gathering.',
    status: 'SANCTIONED',
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'PRT-002',
    institutionName: 'Royal Rajputana Heritage Trust',
    contactPerson: 'Col. K.S. Rathore',
    email: 'trustee@rajputana-heritage.org',
    pillar: 'Hospitality',
    proposalSummary: 'Providing sanctuary access to private ancestral courtyards and private desert pavilion for Salon members.',
    status: 'PENDING_REVIEW',
    createdAt: new Date().toISOString(),
  },
];

const isDbConnected = () => mongoose.connection.readyState === 1;

export const createPartnerInquiry = async (req, res, next) => {
  try {
    const { institutionName, contactPerson, email, pillar, proposalSummary } = req.body;

    if (!institutionName || !contactPerson || !email || !proposalSummary) {
      return res.status(400).json({
        success: false,
        message: 'All institution alignment inquiry fields are required.',
      });
    }

    if (isDbConnected()) {
      const inquiry = await PartnerInquiry.create({
        institutionName,
        contactPerson,
        email,
        pillar: pillar || 'The Patron',
        proposalSummary,
      });

      return res.status(201).json({
        success: true,
        message: 'Institutional dossier received. The Patronage Council will establish discrete contact.',
        data: inquiry,
      });
    } else {
      const newInquiry = {
        _id: 'PRT-' + Date.now().toString().slice(-6),
        institutionName,
        contactPerson,
        email,
        pillar: pillar || 'The Patron',
        proposalSummary,
        status: 'PENDING_REVIEW',
        createdAt: new Date().toISOString(),
      };
      memoryPartners.unshift(newInquiry);

      return res.status(201).json({
        success: true,
        message: 'Institutional dossier received. The Patronage Council will establish discrete contact.',
        data: newInquiry,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getPartnerInquiries = async (req, res, next) => {
  try {
    if (isDbConnected()) {
      const list = await PartnerInquiry.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: list.length, data: list });
    } else {
      return res.status(200).json({ success: true, count: memoryPartners.length, data: memoryPartners });
    }
  } catch (error) {
    next(error);
  }
};
