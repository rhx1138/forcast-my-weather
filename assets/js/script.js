const key = '1b913796ee84a17f196943d065f7b698';
// current time and date
const date = moment().format('MMMM Do YYYY');
const time = moment().format('h:mm:ss a');

let cityHistory = [];
// will save the city search to local storage to be used later
$(document).ready(function () {
    if (localStorage.getItem('cityHistory') !== null) {
        cityHistory = JSON.parse(localStorage.getItem('cityHistory'));
        for (let i = 0; i < cityHistory.length; i++) {
            $('#city-history').append(`<li><a href="#" class="city-link" data-city="${cityHistory[i]}">${cityHistory[i]}</a></li>`);
        }
    }
}
);
