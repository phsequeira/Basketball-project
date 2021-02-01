import { players } from '../player-pool.js';
import { findByPosition } from '../utils.js';
import { renderTable } from '../position-pages/render-table.js';

//empty div to send list data
const draftablePlayers = document.getElementById('draft-pool');
//loop through books array
for (const player of players){
    const newPlayer = findByPosition(players, player.position);
    const draftable = renderTable(players, newPlayer);
    
    draftablePlayers.appendChild(draftable);
}