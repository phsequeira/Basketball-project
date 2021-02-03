

function createMessage(wins) {
    if (wins >= 20) {
        return 'Your team had over 20 wins! You are a superstar!!';
    } else if (wins >= 10) {
        return 'Your team had over 10 wins!! You are a pro!';
    } else {
        return 'Your team had less than 10 wins. You are a rookie...';
    }
}

export function calculateMessage(wins) {
    const result = createMessage(wins);
    return result;
}