import express from 'express';
import adminRoutes from './routes/adminRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', adminRoutes);
app.use('/api', userRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});