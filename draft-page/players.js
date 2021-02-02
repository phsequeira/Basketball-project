import { players } from '../data/player-pool.js';
import { findById } from '../utils.js';
const PostionTitle = document.querySelector('h1');
const draftDesc = document.querySelector('p');
const userPick = document.querySelector('form');
const draftPosition = new URLSearchParams(window.location.search);
const PositionId = draftPosition.get('id');
const draftPool = findById(players, PositionId);
PostionTitle.textContent = draftPool.position;
draftDesc.textContent = `Draft Your Player`;

const draftablePlayers = document.getElementById('player-pool');

for (let choice of draftablePlayers.id) {
    const selection = document.createElement('input');
    const label = document.createElement('label');
    const playerName = document.createElement('p');
    const playerPic = document.createElement('img');
    playerName.textContent = choice.id;
    
    selection.type = 'radio';
    selection.value = choice.id;
    selection.name = 'Decision';

    label.append(playerName, playerPic, selection);

    userPick.append(label);    
}
