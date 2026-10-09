import express from 'express';
import {
  createPetition,
  getPetitions,
  updatePetitionStatus,
  getStats,
} from '../controllers/petitionController.js';

const router = express.Router();

router.route('/').post(createPetition).get(getPetitions);
router.route('/stats').get(getStats);
router.route('/:id').patch(updatePetitionStatus);

export default router;
