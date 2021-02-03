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
        posWorth: 37, 
    }, {
        id: 'Victor Oladipo',
        cost: 1,
        wins: 5,
        position: 'SG',
        img: '../assets/vo.PNG',
        posWorth: 78,
    }, {
        id: 'CJ McCollum',
        cost: 2,
        wins: 8,
        position: 'SG',
        img: '../assets/cj.PNG',
        posWorth: 78,
    }, {
        id: 'Kyle Lowry',
        cost: 2,
        wins: 7,
        position: 'PG',
        img: '../assets/kl.PNG',
        posWorth: 37,
    }, {
        id: 'Manu Ginobili',
        cost: 3,
        wins: 11,
        position: 'SG',
        img: '../assets/mg.PNG',
        posWorth: 78,
    }, {
        id: 'Damien Lillard',
        cost: 3,
        wins: 12,
        position: 'PG',
        img: '../assets/DamianLillard.PNG',
        posWorth: 37,
    }, {
        id: 'Steph Curry',
        cost: 4,
        wins: 15,
        position: 'PG',
        img: '../assets/sc.PNG',
        posWorth: 37,
    }, {   
        id: 'Kobe Bryant',
        cost: 4,
        wins: 16,
        position: 'SG',
        img: '../assets/KobeBryant.PNG',
        posWorth: 78,
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
        position: 'SF',
        img: '../assets/aw.PNG',
        posWorth: 55,
    }, {
        id: 'LaMarcus Aldridge',
        cost: 1,
        wins: 5,
        position: 'PF',
        img: '../assets/la.PNG',
        posWorth: 92,
    }, {
        id: 'Vince Carter',
        cost: 2,
        wins: 8,
        position: 'SF',
        img: '../assets/VC.png',
        posWorth: 55,
    }, {
        id: 'Blake Griffin',
        cost: 2,
        wins: 7,
        position: 'PF',
        img: '../assets/bg.PNG',
        posWorth: 92,
    }, {
        id: 'Tim Duncan',
        cost: 3,
        wins: 11,
        position: 'PF',
        img: '../assets/td.PNG',
        posWorth: 92,
    }, {
        id: 'Tracy Mcgrady',
        cost: 3,
        wins: 10,
        position: 'SF',
        img: '../assets/TMac.png',
        posWorth: 55,
    }, {
        id: 'Dirk Nowitzki',
        cost: 4,
        wins: 15,
        position: 'PF',
        img: '../assets/dn.PNG',
        posWorth: 92,
    }, {   
        id: 'Lebron James',
        cost: 4,
        wins: 16,
        position: 'SF',
        img: '../assets/LbronJ.png',
        posWorth: 55,
    }]
};
const centers = {
        
    id: 'Centers',
    title: 'Select A Gaurd',
    description: 'The Center is your size down low, close to the hoop, maybe free throw distance, but you want them to be a presence inside the paint.',
    players: [{
        id: 'Kwame Brown',
        cost: 1,
        wins: 2,
        position: 'C',
        img: '../assets/kwameB.png',
        posWorth: 27,
    }, {
        id: 'Greg Oden',
        cost: 1,
        wins: 3,
        position: 'C',
        img: '../assets/gregO.png',
        posWorth: 27,
    }, {
        id: 'Jusif Nurkic',
        cost: 2,
        wins: 6,
        position: 'C',
        img: '../assets/jn.PNG',
        posWorth: 27,
    }, {
        id: 'Dwight Howard',
        cost: 2,
        wins: 7,
        position: 'C',
        img: '../assets/dw.PNG',
        posWorth: 27,
    }, {
        id: 'Bill Walton',
        cost: 3,
        wins: 10,
        position: 'C',
        img: '../assets/bw.PNG', 
        posWorth: 27,
    }, {   
        id: 'Yao Ming',
        cost: 3,
        wins: 11,
        position: 'C',
        img: '../assets/YaoM.png',
        posWorth: 27,
    }, {
        id: 'Shaquille ONeal',
        cost: 4,
        wins: 15,
        position: 'C',
        img: '../assets/so.PNG',
        posWorth: 27,
    }, {
        id: 'WIlt Chamberlain',
        cost: 4,
        wins: 16,
        position: 'C',
        img: '../assets/wc.PNG',
        posWorth: 27,
    }]
};
export const players = [ 
    guards,
    forwards,
    centers,
];



