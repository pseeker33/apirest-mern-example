import 'dotenv/config';
import express from 'express';
import petRoutes from './routes/pets.js'
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
// Manage the route middleware
app.use('/pets', petRoutes)

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log('Server activated on ' + PORT));
  
} catch (e) {
  console.log(e);
}