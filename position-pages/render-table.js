import { getPlayer } from '../utils.js';
const table = document.querySelector('table');

const player = getPlayer();
const people = player.people;

function renderTableRow(player) {
    const price = player.cost;
    const position = player.position;
    
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    const positionTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const dropTd = document.createElement('td');
    const button = document.createElement('button');

    nameTd.textContent = player.id;
    positionTd.textContent = position;
    priceTd.textContent = price;

    button.id = 'dropButton';
    button.value = player.id;
    button.textContent = 'Drop Player';

    dropTd.append(button);
    tr.append(nameTd, positionTd, priceTd, dropTd);

    return tr;

}

export function renderTable() {
    for (let player of people) {
        const tableRowDOM = renderTableRow(player);
    
        table.append(tableRowDOM);
    }
    
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    
    tr.append(td1, td2, td3);
    
    table.append(tr);
}