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
    
    let newUserData = findById(userPeople, dropButton.value);
    //const cIndex = b.indexOf(c);

    //b.filter(i => i.id === c.id);
    //console.log(b);

    let dropPlayer = userPeople.filter(function(e) {
        return e.id !== newUserData.id;
    });

    userStorage.people = dropPlayer;

    const stringUserStorage = JSON.stringify(userStorage);

    localStorage.setItem('USER', stringUserStorage);
    window.location = './';
});


