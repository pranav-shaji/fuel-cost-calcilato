const express = require('express');
const app = express();

// Include the fuel calculation logic in this file
const calculateFuelConsumption = (mileage, distance) => {
  const fuelConsumption = distance / mileage;
  return fuelConsumption.toFixed(2);
};

app.use(express.json());

app.post('/calculate', (req, res) => {
  const mileage = req.body.mileage;
  const distance = req.body.distance;
  const fuelConsumption = calculateFuelConsumption(mileage, distance);
  res.json({ fuelConsumption });
});

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});