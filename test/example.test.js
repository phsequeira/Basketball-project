// IMPORT MODULES under test here:
import { players } from '../data/player-pool.js';
import { findById } from '../utils.js';
import { createMessage, bonusMessage } from '../results/msg-utils.js';

// import { example } from '../example.js';

const test = QUnit.test;

test('locates item by it id characteristics and returns that item.', (expect) => {
    const expected = {
        id: 'Guards',
        title: 'Select A Gaurd',
        description: 'The gaurd is your on floor leadership, strong outside shooter, that can drive it to the hoop if needed.',
        players: [{
            id: 'Damon Stoudamire',
            cost: 1,
            wins: 8,
            position: 'PG',
            img: '../assets/DamonStoudamire.PNG',
            posWorth: 37, 
        }, {
            id: 'Victor Oladipo',
            cost: 1,
            wins: 9,
            position: 'SG',
            img: '../assets/vo.PNG',
            posWorth: 78,
        }, {
            id: 'CJ McCollum',
            cost: 2,
            wins: 13,
            position: 'SG',
            img: '../assets/cj.PNG',
            posWorth: 78,
        }, {
            id: 'Kyle Lowry',
            cost: 2,
            wins: 12,
            position: 'PG',
            img: '../assets/kl.PNG',
            posWorth: 37,
        }, {
            id: 'Manu Ginobili',
            cost: 3,
            wins: 16,
            position: 'SG',
            img: '../assets/mg.PNG',
            posWorth: 78,
        }, {
            id: 'Damien Lillard',
            cost: 3,
            wins: 17,
            position: 'PG',
            img: '../assets/DamianLillard.PNG',
            posWorth: 37,
        }, {
            id: 'Steph Curry',
            cost: 4,
            wins: 19,
            position: 'PG',
            img: '../assets/sc.PNG',
            posWorth: 37,
        }, {   
            id: 'Kobe Bryant',
            cost: 4,
            wins: 20,
            position: 'SG',
            img: '../assets/KobeBryant.PNG',
            posWorth: 78,
        }] };
    
    
    const actual = findById(players, 'Guards');
    expect.deepEqual(actual, expected);
});

test('Return apprpriate message based on funds and wins.', (expect) => {

    // if there are 2 or more funds and 20 or more ins the message should be 'superstar'
    //if the funds are 1 and the wins are 10 or more the message should be 'pro'
    //otherwise the message is 'rookie'
    const wins = 61;
    const expected = 'Your team had over 60 wins! You are a superstar!!';
    const actual = createMessage(wins);
    expect.equal(actual, expected);
});
test('Return bonus message based on posWorth', (expect) => {
    const posWorth = 289;
    const expected = 'You actually set a proper lineup! bonus 7 wins added!';
    const actual = bonusMessage(posWorth);
    expect.equal(actual, expected);
});