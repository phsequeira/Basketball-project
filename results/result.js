import { getPlayer } from '../utils.js';
import { renderUserTeam } from './renderTeamScore.js';

const aboutUs = document.getElementById('about-us');

// render user result from local storage
const storageTeam = getPlayer();
const y = storageTeam.people;
renderUserTeam(y);

aboutUs.addEventListener('click', () => {
    window.location = '../about-us/index.html';
});