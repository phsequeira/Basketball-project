import { renderUl } from './render-ul.js';
import { header, renderLogo, findById, getPlayer } from '../utils.js';
import { renderTable } from './render-table.js';


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
        const posWorth = userStorage.posWorth;
        
        let newUserData = findById(userPeople, eachButton.value);
        const posWorthA = newUserData.posWorth;
        const fundA = newUserData.cost;

        let refund = funds + fundA;
        let posRefund = posWorth - posWorthA;

        userStorage.funds = refund;
        userStorage.posWorth = posRefund;

        const stringFunds = JSON.stringify(userStorage);
        localStorage.setItem('USER', stringFunds);

        let dropPlayer = userPeople.filter(function(e) {
            return e.id !== newUserData.id;
        });

        userStorage.people = dropPlayer;

        const stringUserStorage = JSON.stringify(userStorage);

        localStorage.setItem('USER', stringUserStorage);
        const currentTable = document.querySelector('tr');
        currentTable.parentElement.removeChild(currentTable);
        window.location = './';
    });

}); 



