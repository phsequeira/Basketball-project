import players from '../data/player-pool.js';
const ul = document.querySelector('ul');

export function renderUl() {
    for (let player of players) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = player.id;
        a.href = `../draft-page/?id=${player.id}`;
        
        li.append(a);
        ul.append(li);
    }
}