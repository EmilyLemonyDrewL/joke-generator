// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getAJoke from '../api/promises';

// created seperate divs for the joke and punchline
const htmlStructure = () => {
  document.querySelector('#jokeDiv').innerHTML = `
    <h3>BUBBLEGUM'S SPOOKY JOKE GENERATOR</h3>
    <button class="btn btn-success" id="get-joke">GET A JOKE</button>
    <p id="joke-setup"></p>
    <p id="joke-punchline"></p>`;

  // use .innerHTML to insert the joke/punchline
  // use .innerText to change the button text
  let thisJokeHits;
  document.querySelector('#get-joke').addEventListener('click', () => {
  // get the button text to change and print a joke
    console.warn(document.querySelector('#get-joke').innerText);
    if (document.querySelector('#get-joke').innerText === 'GET A JOKE' || document.querySelector('#get-joke').innerText === 'GET ANOTHER JOKE') {
      getAJoke().then((joke) => {
        document.querySelector('#joke-setup').innerHTML = joke.setup;
        thisJokeHits = joke;
        document.querySelector('#joke-punchline').innerHTML = '';
        document.querySelector('#get-joke').innerText = 'GET PUNCHLINE';
      });
    // and then a punchline
    } else if (document.querySelector('#get-joke').innerText === 'GET PUNCHLINE') {
      document.querySelector('#joke-punchline').innerHTML = thisJokeHits.delivery;
      document.querySelector('#get-joke').innerText = 'GET ANOTHER JOKE';
    } else {
      document.querySelector('#joke-setup').innerHTML = '';
      document.querySelector('#joke-punchline').innerHTML = '';
      document.querySelector('#get-joke').innerText = 'GET ANOTHER JOKE';
    }
  });
};

const startApp = () => {
  htmlStructure();
};

startApp();
