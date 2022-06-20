const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv.slice(2);

fetchBreedDescription(breedName, (error, description) => {
  
  if (error) {
    console.error(error);
    return;
  }

  console.log(description);
});

module.exports = { fetchBreedDescription };