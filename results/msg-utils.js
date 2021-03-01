export function createMessage(wins) {
    if (wins < 50) return 'Your team had less than 50 wins. You are a rookie...';

    return wins >= 60 
        ? 'Your team had over 60 wins! You are a superstar!!' 
        : 'Your team had over 50 wins!! You are a pro!';
}

export function calculateMessage(wins) {
    return createMessage(wins);
}

export function bonusMessage(posWorth){
    return posWorth === 289 
        ? 'You set a proper lineup! bonus 7 wins added!' 
        : 'You failed to set a proper lineup! No Bonus!';
}

export function loserMessage(people){
    return people.length < 5 
        ? 'You have also failed to draft 5 players, your team was penalized 7 wins!' 
        : '';

}