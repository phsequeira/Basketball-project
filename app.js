const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        team: formData.get('team-name'),
        funds: 10,
        completed: {},
        people: [],    
    }
        
        const stringyUser = JSON.stringify(user);
        localStorage.setItem('USER', stringyUser);

        window.location = './position-pages/index.html';


    });



