
const PLAYER = 'PLAYER';
const defaultEmptyPlayer = [];

export function getPlayer() {
    const stringyPlayer = localStorage.getItem(PLAYER);

    if (stringyPlayer) {
        // if there is cart parse it
        const parsedPlayer = JSON.parse(stringyPlayer);

        return parsedPlayer;
    }
    else {
        //if there is no cart stringify empty cart
        const stringydefaultPlayer = JSON.stringify(defaultEmptyPlayer);
        localStorage.setItem(PLAYER, stringydefaultPlayer);

        return defaultEmptyPlayer;
    }
}

export function clearTeam() {
    const stringydefaultPlayer = JSON.stringify(defaultEmptyPlayer);
    
    localStorage.setItem(PLAYER, stringydefaultPlayer);
}
