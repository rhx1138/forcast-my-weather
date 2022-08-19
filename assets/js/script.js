// const key = '1b913796ee84a17f196943d065f7b698';
// // current time and date
// const date = moment().format('MMMM Do YYYY');
// const time = moment().format('h:mm:ss a');

// let cityHistory = [];
// // will save the city search to local storage to be used later
// $(document).ready(function () {
//     if (localStorage.getItem('cityHistory') !== null) {
//         cityHistory = JSON.parse(localStorage.getItem('cityHistory'));
//         for (let i = 0; i < cityHistory.length; i++) {
//             $('#city-history').append(`<li><a href="#" class="city-link" data-city="${cityHistory[i]}">${cityHistory[i]}</a></li>`);
//         }
//     }
// }
// );

// // function to get the weather data from the API and display it on the page
// function getWeather(city) {
//     const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
//     $.ajax({
//         url: queryURL,
//         method: 'GET'
//     }).then(function (response) {
//         // console.log(response);
//         const city = response.name;
//         const temp = Math.round((response.main.temp - 273.15) * 1.8 + 32);
//         const humidity = response.main.humidity;
//         const windSpeed = response.wind.speed;
//         const weatherIcon = response.weather[0].icon;
//         const weatherIconURL = `http://



