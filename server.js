import express from 'express';
//import dotenv from 'dotenv';
//import cors from 'cors';
import db from './db.js';
import bodyParser from 'body-parser';
import personRouter from './Routes/personRoutes.js';
import manuRouter from './Routes/manuRoutes.js';

const app = express();
/*dotenv.config();*/

const PORT = process.env.PORT || 3009;

// Middleware

app.use(bodyParser.json());
app.use(express.json());

// Routes
app.get('/name/:name', (req, res) => {
  const name = req.params.name
  res.send('Welcome to Syama\'s API');
});

app.post('/pok', (req, res) => {
  console.log(req.body);
  res.send('I love my song');
});

app.get('/only', (req, res) => {
  res.send('Welcome to /only');
});

app.get('/pop', (req, res) => {
  res.send('Welcome to hi pop');
});

app.post('/pop', (req, res) => {
  console.log('POST is running');
  res.send('Welcome to hi post');
});

app.get('/chicken', (req, res) => {
  const chicken = {
    name: 'Grilled Chicken',
    size: '10mm',
    masala: 'Chicken Spices',
  };
  res.json(chicken);
});
app.use('/person',personRouter)
app.use('/manu',manuRouter)


// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

