export function findById(someArray, id) {
    return someArray.find(item => item.id === id);
}

export function header() {
    const count = JSON.parse(localStorage.getItem('USER'));
    const header = document.getElementById('header');
    header.textContent = `You have $${count.funds} left`;
}

const PLAYER = 'PLAYER';
const defaultEmptyPlayer = [];

export function getPlayer() {
    const stringyPlayer = localStorage.getItem('USER');

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
