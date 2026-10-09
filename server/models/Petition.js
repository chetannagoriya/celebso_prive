import mongoose from 'mongoose';

const petitionSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Confidential communication email is required'],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, 'Discreet contact telephone is required'],
      trim: true,
    },
    title: {
      type: String,
      required: [true, 'Title or Sovereign designation is required'],
      trim: true,
    },
    organization: {
      type: String,
      required: [true, 'Principal entity / Family Office / Sovereign enterprise is required'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'Primary jurisdiction / city is required'],
      trim: true,
    },
    capitalBracket: {
      type: String,
      enum: ['$10M - $50M', '$50M - $250M', '$250M - $1B', '$1B+ / Sovereign Tier', 'Prefer Confidential Disclosure'],
      default: '$50M - $250M',
    },
    nominatedBy: {
      type: String,
      trim: true,
      default: 'Self-Petition / High Advisory Referral',
    },
    statement: {
      type: String,
      required: [true, 'Petition statement is required'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['UNDER_REVIEW', 'ACCEPTED', 'WAITLISTED', 'ARCHIVED'],
      default: 'UNDER_REVIEW',
    },
    salonPreferences: [
      {
        type: String,
      },
    ],
    notes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const Petition = mongoose.model('Petition', petitionSchema);
export default Petition;
