import { renderUl } from './render-ul.js';
import { findById, header } from '../utils.js';
import { renderTable } from './render-table.js';
import people from './fake-data.js';

console.log(people);
const table = document.querySelector('table');

header();
renderUl();

for (let player of people) {
    const member = findById(people, player.id);

    
    const tableRowDOM = renderTable(player, member);

    table.append(tableRowDOM);
}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

tr.append(td1, td2, td3);

table.append(tr);