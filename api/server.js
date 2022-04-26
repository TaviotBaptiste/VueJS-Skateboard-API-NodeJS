const express = require('express');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser");
      port = 3070;

// place holder for the data
const skateboards = [
  {
    id: "1",
    name: "Skateboard",
    brand: "ABS",
    width: "7.5"
  },
  {
    id: "2",
    name: "Long Board",
    brand: "ABS",
    width: "11"
  },
  {
    id: "3",
    name: "Penny",
    brand: "Intersport",
    width: "5"
  }
];

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/skateboard/dist'));

app.get('/api/skateboards', (req, res) => {
  console.log('api/skateboards called!')
  res.json(skateboards);
});

app.post('/api/skateboard', (req, res) => {
  const skateboard = req.body.skateboard;
  skateboard.id = randomId(10);
  console.log('Adding :', skateboard);
  skateboards.push(skateboard);
  res.json("skateboard addedd");
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/skateboard/dist/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});