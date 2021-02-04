import { renderUl } from './render-ul.js';
import { header, renderLogo, findById, getPlayer } from '../utils.js';
import { renderTable } from './render-table.js';


renderLogo();
header();
renderUl();
renderTable();

const dropButton = document.getElementById('dropButton');

dropButton.addEventListener('click', () => {
    
    const userStorage = getPlayer();
    const userPeople = userStorage.people;
    const funds = userStorage.funds;
    
    
    let newUserData = findById(userPeople, dropButton.value);
    
    const fundA = newUserData.cost;

    let refund = funds + fundA;
    

    userStorage.funds = refund;

    const stringFunds = JSON.stringify(userStorage);
    localStorage.setItem('USER', stringFunds);

    let dropPlayer = userPeople.filter(function(e) {
        return e.id !== newUserData.id;
    });

    userStorage.people = dropPlayer;

    const stringUserStorage = JSON.stringify(userStorage);

    localStorage.setItem('USER', stringUserStorage);
    window.location = './';
});


