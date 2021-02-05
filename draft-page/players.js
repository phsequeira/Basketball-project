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
renderLogo();

backToTeam.addEventListener('click', () => {
    
    
    window.location = '../position-pages';

});


for (let choice of draftPool.players) {
    const selection = document.createElement('input');
    const label = document.createElement('label');
    const playerName = document.createElement('p');
    const playerPic = document.createElement('img');
    const draft = document.createElement('button');
    playerName.textContent = choice.id + ` $${choice.cost}`;
    selection.type = 'radio';
    selection.value = choice.id;
    selection.name = 'drafted';
    playerPic.src = choice.img;
    playerPic.className = 'playerPic';
    draft.textContent = 'Draft Player';
    draft.style.backgroundColor = 'chartreuse';
    draft.append(draftButton);
    label.append(playerName, selection, playerPic, draft);

    userPick.append(label);    
}


// userPick.appendChild();




userPick.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(userPick);
    const selectionId = formData.get('drafted');
    
    const choice = findById(draftPool.players, selectionId);
    const user = JSON.parse(localStorage.getItem('USER'));
    if (choice.cost <= user.funds){
        user.posWorth += choice.posWorth;
        user.funds -= choice.cost;
        user.people.push(choice);
        directUser(user.funds, roster);
        localStorage.setItem('USER', JSON.stringify(user));
    } else alert('You cant afford to draft this player!');
});
 

function directUser(userFunds, roster){
    if (userFunds <= 0 || roster === 4){
        setTimeout(function(){window.location = '../results/index.html';}, 100);
    } else {setTimeout(function(){window.location = '../position-pages';}, 100);}}

