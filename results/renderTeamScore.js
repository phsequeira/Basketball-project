import { resultsMessage } from './messages.js';
import { createMessage } from './msg-utils.js';

function calculateTeamScore(players) {
    let winShare = 0;
    for (let player of players) {
        winShare += player.wins;
    }
    return winShare;
}

export function renderUserTeam(lineup) {
    
    // grab target element
    const ul = document.getElementById('result');
    const div = document.getElementById('team-score');

    // calculate team score
    const teamScore = calculateTeamScore(lineup);
    const h3 = document.createElement('h3');
    const span = document.createElement('span');
    h3.textContent = 'Team Score';

    // calculate results message
    const userMsg = createMessage(lineup.funds, teamScore);
    span.textContent = userMsg;

    // append results score & message
    div.append(h3, teamScore, span);
    
    // render user-selected team 
    for (let player of lineup) {
        
        // create player List Item
        const playerLabel = document.createElement('label');
        const playerLi = document.createElement('li');
        const playerImage = document.createElement('img');

        // list item content
        playerLabel.textContent = player.id;
        playerImage.src = player.img;

        // append image inside label
        playerLabel.appendChild(playerImage);

        // append label to LI
        playerLi.appendChild(playerLabel);

        // append LI to UL
        ul.append(playerLi);
    }
    
}





    

