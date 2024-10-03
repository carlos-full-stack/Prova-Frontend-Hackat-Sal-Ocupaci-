let ideasBtn = document.querySelector('.ideas-btn');
let filtersBtn = document.querySelectorAll('nav a');
const APIURL = 'https://bored-api.appbrewery.com/';
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
    if (ideasBtn) callApi();
})


document.addEventListener('DOMContentLoaded', () => {
    filtersBtn.forEach(btn => {
        btn.addEventListener('click', () => {

            callApi(btn.textContent.toLowerCase());


        });
    });

})


function callApi(filter) {

    let url;

    if (filter) {
        url = PROXY_URL + APIURL + `filter?type=${filter}`;
    } else {
        url = PROXY_URL + APIURL + 'random';
    }

    fetch(url)

        .then(response => {
            if (!response.ok) {
                throw new Error('Error in response. Please try again');
            }
            return response.json();

        })

        .then(data => {

            if (filter) {
                updateActivity(data[0].activity);
            } else {
                updateActivity(data.activity);
            }

        })

        .catch(error => {
            console.error('No fue posible obtener los datos ', error);
        });

    console.log(filter);
}


function updateActivity(name) {

    let activityName = document.querySelector('.col-2 p');
    if (activityName) activityName.innerHTML = name;

}