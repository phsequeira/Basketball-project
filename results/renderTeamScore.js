import { calculateMessage } from './msg-utils.js';

export function calculateTeamScore(players) {
    let winShare = 0;
    for (let player of players) {
        winShare += Math.round(player.wins);
    }
    return winShare;
}

export function renderUserTeam(lineup) {
    
    // grab target element
    const ul = document.getElementById('result');
    const resultsDisplay = document.getElementById('results-display');

    // calculate team score
    const teamScore = calculateTeamScore(lineup);
    const scoreSpan = document.createElement('span');
    const span = document.createElement('span');

    // add class lists for spans
    scoreSpan.classList.add('score-span');
    span.classList.add('message-span');

    // calculate results message
    const resultMsg = calculateMessage(teamScore);
    span.textContent = resultMsg;
    scoreSpan.textContent = `Season Wins: ${teamScore} games`;

    // append results score & message
    resultsDisplay.append(scoreSpan, span);
    
    // render user-selected team 
    for (let player of lineup) {
        
        // create player List Item
        const playerLabel = document.createElement('label');
        const playerLi = document.createElement('li');
        const playerImage = document.createElement('img');

        // list item content
        playerLabel.textContent = `${player.id} / ${player.position}`;
        playerImage.src = player.img;

        // append image inside label
        playerLabel.appendChild(playerImage);

        // append label to LI
        playerLi.appendChild(playerLabel);

        // append LI to UL
        ul.append(playerLi);
    }
    
}





    

