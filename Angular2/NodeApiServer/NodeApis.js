const express = require('express');
const request = require('request');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//app.use(bodyParser.text());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/log', function(req, res) {
  console.log(req.body); // the posted data
  res.status(200);
  res.json({});
});

app.post('/data', (request, response) => {
    //response.status(502);
    //response.send('SOA is not available!!');
    response.json([
        {
          "id": 11,
          "name": "Mr. Nice"
        },
        {
          "id": 12,
          "name": "Narco"
        },
        {
          "id": 13,
          "name": "Bombasto"
        },
        {
          "id": 14,
          "name": "Celeritas"
        },
        {
          "id": 15,
          "name": "Magneta"
        },
        {
          "id": 16,
          "name": "RubberMan"
        },
        {
          "id": 17,
          "name": "Dynama"
        },
        {
          "id": 18,
          "name": "Dr IQ"
        },
        {
          "id": 19,
          "name": "Magma"
        },
        {
          "id": 20,
          "name": "Tornado"
        }
      ]);
});