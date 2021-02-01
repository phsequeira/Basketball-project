export function renderTable(playerChose, player) {
    const price = playerChose.price;
    const position = playerChose.position;
    
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    const positionTd = document.createElement('td');
    const priceTd = document.createElement('td');

    nameTd.textContent = player.id;
    positionTd.textContent = position;
    priceTd.textContent = price;

    tr.append(nameTd, positionTd, priceTd);

    return tr;

}