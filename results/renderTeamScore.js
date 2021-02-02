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
    h3.textContent = 'Team Score';
    div.append(h3, teamScore);
    
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





    

