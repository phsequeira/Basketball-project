import { findById } from '../utils.js';
const table = document.querySelector('table');

function renderTableRow(playerChose, player) {
    const price = playerChose.cost;
    const position = playerChose.position;
    
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    const positionTd = document.createElement('td');
    const priceTd = document.createElement('td');

    nameTd.textContent = player.id;
    positionTd.textContent = position;
    priceTd.textContent = price;

    tr.append(nameTd, positionTd, priceTd);

    return tr;

}

export function renderTable(people) {
    for (let player of people) {
        const member = findById(people, player.id);
    
        
        const tableRowDOM = renderTableRow(player, member);
    
        table.append(tableRowDOM);
    }
    
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    
    tr.append(td1, td2, td3);
    
    table.append(tr);
}