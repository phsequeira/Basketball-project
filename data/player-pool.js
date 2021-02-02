const guards = {
    id: 'Guards',
    title: 'Select A Gaurd',
    description: 'The gaurd is your on floor leadership, strong outside shooter, that can drive it to the hoop if needed.',
    players: [{
        id: 'Damon Stoudamire',
        cost: 1,
        wins: 5.9,
        position: 'PG',
        img: '../assets/DamonStoudamire.PNG',
    }, {
        id: 'Damien Lillard',
        cost: 2,
        wins: 11.6,
        position: 'PG',
        img: '../assets/DamianLillard.PNG',
    }, {   
        id: 'Kobe Bryant',
        cost: 3,
        wins: 10.7,
        position: 'PG',
        img: '../assets/KobeBryant.PNG',
    }]
};

const forwards = {
    id: 'Forwards',
    title: 'Select A Gaurd',
    description: 'The Forwards are you mid range shooters that help keep the ball moving, fast and agile.',
    players: [{
        id: 'Vince Carter',
        cost: 3,
        wins: 6,
        position: 'SF',
        img: '../assets/VC.png',
    }, {
        id: 'Tracy Mcgrady',
        cost: 2,
        wins: 8.4,
        position: 'SF',
        img: '../assets/TMac.png',
    }, {   
        id: 'Lebron James',
        cost: 4,
        wins: 9.8,
        position: 'SF',
        img: '../assets/LbronJ.png',
    }]
};
const centers = {
        
    id: 'Centers',
    title: 'Select A Gaurd',
    description: 'The Center is your size down low, close to the hoop, maybe free throw distance, but you want them to be a presence inside the paint.',
    players: [{
        id: 'Kwame Brown',
        cost: 2,
        wins: 4.9,
        position: 'C',
        img: '../assets/kwameB.png',
    }, {
        id: 'Greg Oden',
        cost: 1,
        wins: 4.6,
        position: 'C',
        img: '../assets/gregO.png',
    }, {   
        id: 'Yao Ming',
        cost: 3,
        wins: 10.6,
        position: 'C',
        img: '../assets/YaoM.png',
    }]
};
export const players = [ 
    guards,
    forwards,
    centers,
];



