//jshint esversion: 6

// simple Express.js RESTful API
const db = [
  {
    "id" : 1,
    "name": "Argus Filch",
    "number": "800-Hog-Wart"
  }
];
export default tel_book;

// initialize
const
  port = 8888,
  bodyParser = require('body-parser'),
  express = require('express'),
  app = express();

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

//if the client directory contains an "index.html" web page
//  it will be displayed as the default document
app.use(express.static(__dirname + "/client"));

// enable CORS
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  next();
});

// /hello/ route, an HTTP GET request
app.get('/hello/:name?', (req, res) =>
  res.json({
    message: `Hello ${req.params.name || 'world'}!`
  })
);

// start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.post('/addnum', (req, res) => {
const telnum = {
  name: req.body.name,
  number: req.body,number
}
return res.status(201).send({
  success: 'true',
  message: 'new number added',
  telnum
})
});

// endpoint to Get all tel numbers
app.post('/addnum', (req, res) => {
const telnum = {
id: db.length + 1,
name: req.body.name,
number: req.body.number
}
db.push(telnum); //add record to local db
return res.status(201).send({
success: 'true',
message: 'Telephone Number added successfully',
telnum
})
});
