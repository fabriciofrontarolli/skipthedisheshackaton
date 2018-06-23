const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get('/api/sellingsPerDay', (req, res) => {
  res.send({
      
  });
});

app.get('/api/toprestaurants', (req, res) => {
  res.send({
      
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
