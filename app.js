import 'dotenv/config';
import express from 'express';
import petRoutes from './routes/pets.js'

const app = express();

// Manage the route middleware
app.use('/pets', petRoutes)

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log('Server activated on ' + PORT));
  
} catch (e) {
  console.log(e);
}