import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import petitionRoutes from './routes/petitionRoutes.js';
import partnerRoutes from './routes/partnerRoutes.js';
import salonRoutes from './routes/salonRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Status
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ONLINE',
    project: 'Celebso Privé Alliance Platform',
    protocol: 'Encrypted & Confidential',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/invitations', petitionRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/salons', salonRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✨ Celebso Privé Sovereign API running on port ${PORT}`);
  console.log(`🏛️ Health check: http://localhost:${PORT}/api/health`);
});
