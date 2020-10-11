const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// const menu = require('./data/menu');

const dishesRoutes = require('./routes/dishesRoutes');

dotenv.config();

connectDB();

//initialize express
const app = express();

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use('/api/dishes', dishesRoutes);

// get single dish
// app.get('/api/dishes/:id', (req, res) => {
//   const dish = menu.find((d) => d._id === req.params.id);
//   res.json(dish);
// });

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
