const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

const getAJoke = () => new Promise((resolve, reject) => {
  fetch(jokeEndpoint, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getAJoke;
