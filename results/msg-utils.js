import { resultsMessage } from './messages.js';

export function createMessage(funds, wins) {
    if (funds >= 2 && wins >= 20) {

        return 'superstar';
    } else if (wins >= 10) {
        return 'pro';
    } else {
        return 'rookie';
    }
}


export function calculateMessage(wins) {
    const result = createMessage(wins);

    for (let msg of resultsMessage) {
        if (msg === result) {
            return msg;
        }
    }
