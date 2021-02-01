import { renderUl } from './render-ul.js';
import { header } from '../utils.js';
import { renderTable } from './render-table.js';
import people from './fake-data.js';
//import { getPlayer } from '../utils.js';

const get = people;
//const table = getPlayer();

header();
renderUl();
renderTable(get);