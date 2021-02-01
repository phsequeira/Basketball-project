import { players } from '../player-pool.js';
import { findByPosition } from '../utils.js';

//empty div to send list data
const draftablePlayers = document.getElementById('player-list');
//loop through books array
for (const player of players){
    const newPlayer = findByPosition(players, player.position);
    
    draftablePlayers.appendChild(newPlayer);
}