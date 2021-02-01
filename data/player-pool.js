const guards = {
    id: 'Guards',
    title: 'Select A Gaurd',
    description: 'The gaurd is your on floor leadership, strong outside shooter, that can drive it to the hoop if needed.',
    players: [{
        id: 'DamonStoudamire',
        cost: 1,
        wins: 3,
        position: 'PG',
        img: './assets/DamonStoudamire.PNG',
    }, {
        id: 'DamienLillard',
        cost: 2,
        wins: 10,
        position: 'PG',
        img: './assets/DamianLillard.PNG',
    }, {   
        id: 'KobeBryant',
        cost: 2,
        wins: 10,
        position: 'PG',
        img: './assets/KobeBryant.PNG',
    }]
};

const forwards = {
    id: 'Forwards',
    title: 'Select A Gaurd',
    description: 'The Forwards are you mid range shooters that help keep the ball moving, fast and agile.',
    players: [{
        id: 'VinceCarter',
        cost: 2,
        wins: 3,
        position: 'SF',
        img: './assets/VC.png',
    }, {
        id: 'TracyMcgrady',
        cost: 2,
        wins: 5,
        position: 'SF',
        img: './assets/TMac.png',
    }, {   
        id: 'LebronJames',
        cost: 3,
        wins: 7,
        position: 'SF',
        img: './assets/LbronJ.png',
    }]
};
const centers = {
        
    id: 'Centers',
    title: 'Select A Gaurd',
    description: 'The Center is your size down low, close to the hoop, maybe free throw distance, but you want them to be a presence inside the paint.',
    players: [{
        id: 'KwameBrown',
        cost: 1,
        wins: 3,
        position: 'C',
        img: './assets/kwameB.png',
    }, {
        id: 'GregOden',
        cost: 2,
        wins: 1,
        position: 'C',
        img: './assets/gregO.png',
    }, {   
        id: 'YaoMing',
        cost: 3,
        wins: 4,
        position: 'C',
        img: './assets/YaoM.png',
    }]
};
const players = [ 
    guards,
    forwards,
    centers,
];

export default players;
