const request = require('request');

const arg = process.argv.slice(2);
let url = `https://api.thecatapi.com/v1/breeds/search?q=${arg}`;

request(url, function(error, response, body) {
  
  if (error) {
    console.error("Error fetching breed.", error);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.error('Breed not found.');
    return;
  }

  
  
  console.log(data);
  console.log(data[0].description);
  console.log(typeof data);
});






