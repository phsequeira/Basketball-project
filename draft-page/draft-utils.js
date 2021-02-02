export function renderPlayer(player) {
    
    const playerPool = document.createElement('li');

    const img = document.createElement('img');
    img.src = player.image;
    playerPool.append(img);

    const h3 = document.createElement('h3');
    h3.classList.add('title');
    h3.textContent = player.name;
    playerPool.append(h3);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = 'Price: $' + player.price;
    playerPool.append(pPrice);

    const button = document.createElement('button');
    button.addEventListener('click', () => {
        // getPlayer(player.id);
    });
    button.textContent = 'Draft';
    playerPool.append(button);

    return playerPool;
}

// export function draftPlayer(id){
//     const team = getPlayer();
//     const selectedPlayer = findById(playerPool, id);

//     if (selectedPlayer){
//         selectedPlayer.quantity++;
//     }
//     else {
//         const newPick = {
//             id: id,
            
//         };
//         cart.push(newBook);
//     }
//     setCart(cart);
// }
