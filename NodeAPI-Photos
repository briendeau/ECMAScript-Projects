const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');

PORT = 8081;

// load photos.json file
const photosData = JSON.parse(fs.readFileSync('paintings.json'));

// use middleware functions
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));




// implementing three routes.

app.get('/', (req, res) => {
  res.json(photosData);
});

app.get('/:id', (req, res) => {
 // change user supplied symbol to upper case
 const idToFind = req.params.id;
 // search the array of objects for a match
 const matches = photosData.filter(obj => idToFind === obj.paintingID.toString());

//  debug id numbers for testing
//  console.log("param" + idToFind)
//  photosData.forEach(obj => console.log("photoid" + obj.paintingID));

 // return the matching company

 res.json(matches);
})

app.get('/iso/:iso', (req, res) => {
  for (let photo of photosData) {
    if (req.params.iso.toLowerCase() == photo.iso.toLowerCase()) {
      res.json(photo);
    } else {
      res.status(404).json(jsonMessage("iso does not exist in the file."))
    }
  }
})

const jsonMessage = (msg) => {
  return { message: msg};
};


app.listen(PORT, () => {
  console.log("Server running at port= " + PORT);
  console.log(`${PORT}`);
})


