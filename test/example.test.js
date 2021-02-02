// IMPORT MODULES under test here:
import { players } from '../data/player-pool.js';
import { findById } from '../utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('locates item by it id characteristics and returns that item.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
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
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(players, 'Guards');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
