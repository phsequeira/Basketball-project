// IMPORT MODULES under test here:
import { players } from '../data/player-pool.js';
import { findById } from '../utils.js';
import { createMessage } from '../results/msg-utils.js';
import { calculateTeamScore } from '../results/renderTeamScore.js';
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
            wins: 4,
            position: 'PG',
            img: '../assets/DamonStoudamire.PNG',
        }, {
            id: 'Victor Oladipo',
            cost: 1,
            wins: 5,
            position: 'SG',
            img: '../assets/vo.PNG',
        }, {
            id: 'CJ McCollum',
            cost: 2,
            wins: 8,
            position: 'SG',
            img: '../assets/cj.PNG',
        }, {
            id: 'Kyle Lowry',
            cost: 2,
            wins: 7,
            position: 'PG',
            img: '../assets/kl.PNG',
        }, {
            id: 'Manu Ginobili',
            cost: 3,
            wins: 11,
            position: 'SG',
            img: '../assets/mg.PNG',
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
            position: 'PG',
            img: '../assets/sc.PNG'
        }, {   
            id: 'Kobe Bryant',
            cost: 4,
            wins: 16,
            position: 'SG',
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
    const expected = 'Your team had over 20 wins! You are a superstar!!';
    const actual = createMessage(wins);
    expect.equal(actual, expected);
});
test('Return apprpriate message based on funds and wins.', (expect) => {

    // if there are 2 or more funds and 20 or more ins the message should be 'superstar'
    //if the funds are 1 and the wins are 10 or more the message should be 'pro'
    //otherwise the message is 'rookie'
    const players1 = [
        { id: 'Damon Stoudamire', cost: 1, wins: 5.9, position: 'PG', img: '../assets/DamonStoudamire.PNG' },
        { id: 'Damien Lillard', cost: 2, wins: 11.6, position: 'PG', img: '../assets/DamianLillard.PNG' },
        { id: 'Vince Carter', cost: 3, wins: 6, position: 'SF', img: '../assets/VC.png' },
        { id: 'Tracy Mcgrady', cost: 2, wins: 8.4, position: 'SF', img: '../assets/TMac.png' },
        { id: 'Greg Oden', cost: 1, wins: 4.6, position: 'C', img: '../assets/gregO.png' }];
    const expected = 37;
    const actual = calculateTeamScore(players1);
    expect.equal(actual, expected);
});