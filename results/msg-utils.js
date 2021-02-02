import { resultsMessage } from "./messages";

function createMessage(funds, wins) {
    if (funds >= 2 && wins >= 20) {
        return 'superstar';
    } else if (funds === 1 && wins >= 10) {
        return 'pro';
    } else {
        return 'rookie';
    }
}

export function calculateMessage(funds, wins) {
    const result = createMessage(funds, wins);

    for (let msg of resultsMessage)
}