let ideasBtn = document.querySelector('.ideas-btn');
let filtersBtn = document.querySelectorAll('nav a');
const APIURL = 'https://bored-api.appbrewery.com/random';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

ideasBtn.addEventListener('mousedown', () => {
    if (ideasBtn) {
        ideasBtn.classList.add('ideas-btn--active');

    }
})
ideasBtn.addEventListener('mouseup', () => {
    if (ideasBtn) {
        ideasBtn.classList.remove('ideas-btn--active');

    }
})


ideasBtn.addEventListener('click', () => {
    if (ideasBtn) {
        fetch(PROXY_URL + APIURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error in response. Please try again');
                }
                return response.json();

            })

            .then(data => {
                console.log(data.key);
            })

            .catch(error => {
                console.error('No fue posible obtener los datos ', error);
            });
    }

})


document.addEventListener('DOMContentLoaded', () => {
    filtersBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log(btn.textContent);

        });
    });

})