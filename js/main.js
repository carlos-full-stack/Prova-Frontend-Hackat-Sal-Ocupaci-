let ideasBtn = document.querySelector('.ideas-btn');
let filtersBtn = document.querySelectorAll('nav a');
let filter = null;
const APIURL = 'https://bored-api.appbrewery.com/';
const PROXY_URL = 'http://api.allorigins.win/get?url=';


ideasBtn.addEventListener('mousedown', () => {
    if (ideasBtn) {
        ideasBtn.classList.add('active');

    }
})
ideasBtn.addEventListener('mouseup', () => {
    if (ideasBtn) {
        ideasBtn.classList.remove('active');

    }
})


ideasBtn.addEventListener('click', () => {
    if (ideasBtn) callApi();
})


document.addEventListener('DOMContentLoaded', () => {
    filtersBtn.forEach(btn => {
        btn.addEventListener('click', () => {

            filtersBtn.forEach(btn => {
                btn.classList.remove('active');
            });

            btn.classList.add('active');

            filter = btn.textContent.toLowerCase();



        });
    });

})


function callApi() {

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

                const activities = JSON.parse(data.contents);
                const randomIndex = Math.floor(Math.random() * activities.length);
                const randomActivity = activities[randomIndex].activity;

                updateActivity(randomActivity);


            } else {

                const activityData = JSON.parse(data.contents);
                const activity = activityData.activity;
                updateActivity(activity);

            }

        })

        .catch(error => {
            console.error('No fue posible obtener los datos ', error);
        });

}


function updateActivity(name) {

    let activityName = document.querySelector('.col-2 p');
    if (activityName) activityName.innerHTML = name;

    setTimeout(() => {
        activityName.classList.add('active');
    }, 500)

}