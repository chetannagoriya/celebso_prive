import express from 'express';
import {
  createPartnerInquiry,
  getPartnerInquiries,
} from '../controllers/partnerController.js';

const router = express.Router();

router.route('/').post(createPartnerInquiry).get(getPartnerInquiries);

export default router;
