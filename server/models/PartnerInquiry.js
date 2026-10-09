import mongoose from 'mongoose';

const partnerInquirySchema = new mongoose.Schema(
  {
    institutionName: {
      type: String,
      required: [true, 'Institution / Maison name is required'],
      trim: true,
    },
    contactPerson: {
      type: String,
      required: [true, 'Representative name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Institutional email is required'],
      trim: true,
      lowercase: true,
    },
    pillar: {
      type: String,
      required: [true, 'Partnership pillar is required'],
      enum: [
        'The Patron',
        'Foundations',
        'Hospitality',
        'Technology',
        'Heritage & Maison',
        'General Institutional Alignment',
      ],
      default: 'The Patron',
    },
    proposalSummary: {
      type: String,
      required: [true, 'Proposal details are required'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['PENDING_REVIEW', 'ENGAGED', 'SANCTIONED', 'ARCHIVED'],
      default: 'PENDING_REVIEW',
    },
  },
  {
    timestamps: true,
  }
);

const PartnerInquiry = mongoose.model('PartnerInquiry', partnerInquirySchema);
export default PartnerInquiry;
