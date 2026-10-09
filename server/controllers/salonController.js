import Salon from '../models/Salon.js';
import mongoose from 'mongoose';

const defaultSalons = [
  {
    _id: 'SAL-01',
    title: 'The Royal Banquet',
    subtitle: 'Dining · Heritage',
    location: 'Grand Courtyard & Palace Pavilions, Jaipur',
    dates: 'November 14, 2025 · 19:30 HRS',
    capacity: 40,
    theme: 'Imperial Gastronomy & Unrushed Conversation',
    category: 'BANQUET',
    description:
      'An extraordinary multi-course culinary journey orchestrated by royal chefs and heritage custodians under candlelit palace arches.',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    itinerary: [
      { time: '19:00', title: 'Arrivals & Royal Shahi Swagat', description: 'Private welcome with traditional chamber acoustics.' },
      { time: '20:15', title: 'The Imperial Feast', description: 'Curated 7-course royal thali paired with rare vintage cellars.' },
      { time: '22:30', title: 'Courtyard Nocturne', description: 'Private chamber discourse around the palace water basins.' },
    ],
  },
  {
    _id: 'SAL-02',
    title: 'The Roundtable',
    subtitle: 'Discourse · Privacy',
    location: 'The Amber Library & State Room, Jaipur',
    dates: 'November 15, 2025 · 10:30 HRS',
    capacity: 40,
    theme: 'Sovereign Capital, Legacy & Multi-Generational Stewardship',
    category: 'ROUNDTABLE',
    description:
      'Chatham House discussions on sovereign allocation, artificial intelligence sovereignty, and discrete asset preservation.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    itinerary: [
      { time: '10:00', title: 'Assembly & Morning Briefing', description: 'Discrete briefing by the High Advisory board.' },
      { time: '11:00', title: 'Sovereign Capital Convergence', description: 'Private closed-door roundtables among family principals.' },
      { time: '13:30', title: 'Luncheon by the Palace Lake', description: 'Bespoke culinary interlude with curated pairings.' },
    ],
  },
  {
    _id: 'SAL-03',
    title: 'The Imperial Soirée',
    subtitle: 'Culture · Alliance',
    location: 'Lakefront Terrace & Palace Bastion, Jaipur',
    dates: 'November 15, 2025 · 21:00 HRS',
    capacity: 40,
    theme: 'Unrushed Fellowship Amidst Nocturnal Grandeur',
    category: 'SOIRÉE',
    description:
      'Unrushed fellowship amidst nocturnal grandeur, illuminated marble terraces, and timeless acoustics under the stars.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    itinerary: [
      { time: '21:00', title: 'Midnight Soirée Opening', description: 'Acoustic classical sitar & ambient string quartet.' },
      { time: '22:30', title: 'Archival Spirits & Cigar Salon', description: 'Ultra-rare single cask tastings in private salon.' },
      { time: '01:00', title: 'Closing Alliance Pledge', description: 'Final fellowship discourse under royal constellations.' },
    ],
  },
];

const isDbConnected = () => mongoose.connection.readyState === 1;

export const getSalons = async (req, res, next) => {
  try {
    if (isDbConnected()) {
      let salons = await Salon.find();
      if (salons.length === 0) {
        salons = await Salon.insertMany(defaultSalons);
      }
      return res.status(200).json({ success: true, count: salons.length, data: salons });
    } else {
      return res.status(200).json({ success: true, count: defaultSalons.length, data: defaultSalons });
    }
  } catch (error) {
    next(error);
  }
};

export const getSalonById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (isDbConnected()) {
      const salon = await Salon.findById(id);
      if (!salon) return res.status(404).json({ success: false, message: 'Salon not found' });
      return res.status(200).json({ success: true, data: salon });
    } else {
      const salon = defaultSalons.find((s) => s._id === id);
      if (!salon) return res.status(404).json({ success: false, message: 'Salon not found' });
      return res.status(200).json({ success: true, data: salon });
    }
  } catch (error) {
    next(error);
  }
};
