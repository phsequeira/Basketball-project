function calculateTeamScore(players) {
    let winShare = 0;
    for (let player of players) {
        winShare += player.wins;
    }
    return winShare;
}

export function renderUserTeam(lineup) {
    
    // grab elements
    const ul = document.getElementById('result');
    const table = document.createElement('table');

    // render user-selected team 
    for (let player of lineup) {
        
        // create player row elements
        const playerRow = document.createElement('tr');
        const nameTd = document.createElement('td');
        const imageTd = document.createElement('td');
        const playerImage = document.createElement('img');

        // player row content
        nameTd.textContent = player.id;
        playerImage.src = player.img;
        imageTd.append(playerImage);  

        // append td
        playerRow.append(nameTd, imageTd);
        
        
        // append rows
        table.append(playerRow);

        //render to results page
        ul.append(table);
    }  

    const teamScore = calculateTeamScore(lineup);

    // create team score row
    const teamScoreRow = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.textContent = 'Team Score';
    td2.textContent = teamScore;

    teamScoreRow.append(td1, td2);
    table.append(teamScoreRow);
}
