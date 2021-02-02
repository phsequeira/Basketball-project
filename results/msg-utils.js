import { resultsMessage } from './messages.js';

export function createMessage(wins) {
    if (wins >= 20) {
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

}