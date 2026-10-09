import mongoose from 'mongoose';

const salonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      required: true,
    },
    dates: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      default: 40,
    },
    theme: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['BANQUET', 'ROUNDTABLE', 'SOIRÉE', 'SPECIAL_CHAPTER'],
      default: 'ROUNDTABLE',
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    itinerary: [
      {
        time: String,
        title: String,
        description: String,
      },
    ],
    isOpenForPetition: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Salon = mongoose.model('Salon', salonSchema);
export default Salon;
