import { players } from '../data/player-pool.js';
import { findById, header, renderLogo } from '../utils.js';
const draftDesc = document.querySelector('p');
const userPick = document.querySelector('form');
const draftPosition = new URLSearchParams(window.location.search);
const PositionId = draftPosition.get('id');
const draftPool = findById(players, PositionId);
draftDesc.textContent = `Draft Your Player`;
const draftButton = document.querySelector('#draft-button');
const backToTeam = document.querySelector('#team-button');
const user = JSON.parse(localStorage.getItem('USER'));
const roster = user.people.length;

header();
renderLogo()

backToTeam.addEventListener('click', () => {
    
    
    window.location = '../position-pages';

});


for (let choice of draftPool.players) {
    const selection = document.createElement('input');
    const label = document.createElement('label');
    const playerName = document.createElement('p');
    const playerPic = document.createElement('img');
    playerName.textContent = choice.id + ` $${choice.cost}`;
    selection.type = 'radio';
    selection.value = choice.id;;
    selection.name = 'drafted';
    playerPic.src = choice.img;
    label.append(playerName, playerPic, selection);

    userPick.append(label);    
}


userPick.appendChild(draftButton);




userPick.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(userPick);

    const selectionId = formData.get('drafted');
   

    const choice = findById(draftPool.players, selectionId);
    const user = JSON.parse(localStorage.getItem('USER'));
   
    user.funds -= choice.cost;
    user.people.push(choice);
    
    localStorage.setItem('USER', JSON.stringify(user));
    alert(`You successfully drafted ${selectionId}!`);

    directUser(user.funds, roster);

});
 

function directUser(userFunds, roster){
    if (userFunds <= 0 || roster === 4){
        setTimeout(function(){window.location = '../results/index.html';}, 1000);
    } else {setTimeout(function(){window.location = '../position-pages';}, 1000);}}
