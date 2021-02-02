import { players } from '../data/player-pool.js';
import { findById } from '../utils.js';
const draftDesc = document.querySelector('p');
const userPick = document.querySelector('form');
const draftPosition = new URLSearchParams(window.location.search);
const PositionId = draftPosition.get('id');
const draftPool = findById(players, PositionId);
draftDesc.textContent = `Draft Your Player`;

for (let choice of draftPool.players) {
    const selection = document.createElement('input');
    const label = document.createElement('label');
    const playerName = document.createElement('p');
    const playerPic = document.createElement('img');
    playerName.textContent = choice.id + ` $${choice.cost}`;
    
    selection.type = 'radio';
    selection.value = choice.id;
    selection.name = 'drafted';
    playerPic.src = choice.img;
    label.append(playerName, playerPic, selection);

    userPick.append(label);    
}
userPick.addEventListener('submit', (action) => {
    action.preventDefault();
    const data = new FormData(userPick);
    const chosenPlayer = data.get('drafted');


    directUser(userFunds);
});
    

function directUser(userFunds){
    if (userFunds <= 0){
        setTimeout(function(){window.location = '../results/index.html';}, 5000);
    } else {setTimeout(function(){window.location = '../position-pages';}, 5000);}}