import { renderUl } from './render-ul.js';
import { header } from '../utils.js';
import { renderTable } from './render-table.js';
import people from './fake-data.js';

console.log(people);
const getPlayer = people;

header();
renderUl();
renderTable(getPlayer);