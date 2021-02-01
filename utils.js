export function findById(someArray, id) {
    return someArray.find(item => item.id === id);
}

export function header() {
    const count = JSON.parse(localStorage.getItem('USER'));
    const header = document.getElementById('header');
    header.textContent = `You have $${count.funds} left`;
}

