// IMPORT MODULES under test here:
import { players } from '../data/player-pool.js';
import { findById } from '../utils.js';
import { createMessage } from '../results/msg-utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('locates item by it id characteristics and returns that item.', (expect) => {
    const expected = {
        title: 'Select A Gaurd',
        description: 'The gaurd is your on floor leadership, strong outside shooter, that can drive it to the hoop if needed.',
        id: 'Guards',
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
    
    const actual = findById(players, 'Guards');
    expect.deepEqual(actual, expected);
});

test('Return apprpriate message based on funds and wins.', (expect) => {

    // if there are 2 or more funds and 20 or more ins the message should be 'superstar'
    //if the funds are 1 and the wins are 10 or more the message should be 'pro'
    //otherwise the message is 'rookie'
    const wins = 21;
    const expected = 'superstar';
    const actual = createMessage(wins);
    expect.equal(actual, expected);
});