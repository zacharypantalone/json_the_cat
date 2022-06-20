const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, function(error, response, body) {
  
    if (error) {
      callback(error, null);
    }
      
    const data = JSON.parse(body);
    const breed = data[0];
      
    if (breed) {
      callback(null, breed.description);
    } else {
      callback('Breed not found.');
    }
  
  });
};
  
module.exports = { fetchBreedDescription };