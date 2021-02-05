import { renderUl } from './render-ul.js';
import { header, renderLogo, findById, getPlayer, renderTeamName } from '../utils.js';
import { renderTable } from './render-table.js';

renderTeamName();
renderLogo();
header();
renderUl();
renderTable();

const dropButton = document.querySelectorAll('button');
dropButton.forEach(eachButton => {
    eachButton.addEventListener('click', () => {
    
        const userStorage = getPlayer();
        const userPeople = userStorage.people;
        const funds = userStorage.funds;
        
        
        let newUserData = findById(userPeople, eachButton.value);
        
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

}); 




