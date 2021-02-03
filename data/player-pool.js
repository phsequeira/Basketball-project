const guards = {
    id: 'Guards',
    title: 'Select A Gaurd',
    description: 'The gaurd is your on floor leadership, strong outside shooter, that can drive it to the hoop if needed.',
    players: [{
        id: 'Damon Stoudamire',
        cost: 1,
        wins: 4,
        position: 'PG',
        img: '../assets/DamonStoudamire.PNG',
    }, {
        id: 'Victor Oladipo',
        cost: 1,
        wins: 5,
        position: 'SG'
    }, {
        id: 'CJ McCollum',
        cost: 2,
        wins: 8,
        position: 'SG',
    }, {
        id: 'Kyle Lowry',
        cost: 2,
        wins: 7,
        position: 'PG',
    }, {
        id: 'Manu Ginobili',
        cost: 3,
        wins: 11,
        position: 'SG',
    }, {
        id: 'Damien Lillard',
        cost: 3,
        wins: 12,
        position: 'PG',
        img: '../assets/DamianLillard.PNG',
    }, {
        id: 'Steph Curry',
        cost: 4,
        wins: 15,
        position: 'PG'
    }, {   
        id: 'Kobe Bryant',
        cost: 4,
        wins: 16,
        position: 'SG',
        img: '../assets/KobeBryant.PNG',
    }]
};

const forwards = {
    id: 'Forwards',
    title: 'Select A Gaurd',
    description: 'The Forwards are you mid range shooters that help keep the ball moving, fast and agile.',
    players: [{
        id: 'Andrew Wiggins',
        cost: 1,
        wins: 4,
        position: 'SF'
    }, {
        id: 'LaMarcus Aldridge',
        cost: 1,
        wins: 5,
        position: 'PF'
    }, {
        id: 'Vince Carter',
        cost: 2,
        wins: 8,
        position: 'SF',
        img: '../assets/VC.png',
    }, {
        id: "Blake Griffin",
        cost: 2,
        wins: 7,
        position: 'PF'
    }, {
        id: "Tim Duncan",
        cost: 3,
        wins: 11,
        position: 'PF',
    }, {
        id: 'Tracy Mcgrady',
        cost: 3,
        wins: 10,
        position: 'SF',
        img: '../assets/TMac.png',
    }, {
        id: 'Dirk Nowitzki',
        cost: 4,
        wins: 15,
        position: 'PF'
    },{   
        id: 'Lebron James',
        cost: 4,
        wins: 16,
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



