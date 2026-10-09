import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Salon from './models/Salon.js';
import Petition from './models/Petition.js';
import PartnerInquiry from './models/PartnerInquiry.js';

dotenv.config();

const initialSalons = [
  {
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

const seedData = async () => {
  try {
    await connectDB();
    console.log('[Seed] Clearing existing collections...');
    await Salon.deleteMany({});
    await Petition.deleteMany({});
    await PartnerInquiry.deleteMany({});

    console.log('[Seed] Inserting initial salons...');
    await Salon.insertMany(initialSalons);

    console.log('[Seed] Inserting sample vetted petitions...');
    await Petition.create([
      {
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
      },
      {
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
      },
    ]);

    console.log('✅ Database successfully seeded with Celebso Privé data!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedData();
