const express = require('express');
const bodyParser = require('body-parser');
const turf = require('turf');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port);

app.post('/', (req, res) => {
  var features = [
  turf.point([-75.343, 39.984], {name: 'Location A'}),
  turf.point([-75.833, 39.284], {name: 'Location B'}),
  turf.point([-75.534, 39.123], {name: 'Location C'})
  ];
  res.send(turf.featureCollection(features));
});
