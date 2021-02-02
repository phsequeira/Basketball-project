import { renderUserTeam } from './renderTeamScore.js';

const aboutUs = document.getElementById('about-us');

const user = [
    {   
        id: 'KobeBryant',
        cost: 3,
        wins: 172.7,
        position: 'PG',
        img: '../assets/KobeBryant.png',
    },
    {
        id: 'DamienLillard',
        cost: 2,
        wins: 84.8,
        position: 'PG',
        img: '../assets/DamianLillard.png',
    },
    {
        id: 'VinceCarter',
        cost: 3,
        wins: 125.3,
        position: 'SF',
        img: '../assets/VC.png',
    },
    {   
        id: 'LebronJames',
        cost: 4,
        wins: 239.4,
        position: 'SF',
        img: '../assets/LbronJ.png',
    },
    {
        id: 'KwameBrown',
        cost: 2,
        wins: 20.8,
        position: 'C',
        img: '../assets/kwameB.png',
    }];

const stringyUser = JSON.stringify(user);
localStorage.setItem('USER', stringyUser);

const userTeam = JSON.parse(localStorage.getItem('USER'));

renderUserTeam(userTeam);

aboutUs.addEventListener('click', () => {
    window.location = '../about-us/index.html';
});