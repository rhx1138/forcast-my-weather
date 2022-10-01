





// let weather = {
//     apiKey: "1b913796ee84a17f196943d065f7b698",
//     fetchWeather: function (city) {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${this.apiKey}`)
//             .then((response) => response.json())
//             .then((data) => this.displayWeather(data));

//     },
//     displayWeather: function (data) {
//         const {
//             name
//         } = data;
//         const {
//             icon
//         } = data.weather[0];
//         const {
//             temp,
//             humidity
//         } = data.main;
//         const {
//             speed
//         } = data.wind;
//         const {
//             lat,
//             lon
//         } = data.coord;
                     
//         document.querySelector(".icon").src = `http://openweathermap.org/img/w/${icon}.png`;
//         document.querySelector(".city").innerText = `Weather in ${name}`;
//         document.querySelector(".temp").innerText = `${temp}°F`;
//         document.querySelector(".wind").innerText = `Wind speed: ${speed}mp/h`;
//         document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
//         document.querySelector(".uv").innerText = `UV index: ${lon}%`;

//         latitude = lat;
//         longitude = lon;
        

//     }
// };




// should create a func to now take lat lon from city to the lat lon below
// https://api.openweathermap.org/data/2.5/onecall?lat=41.85&lon=-87.65&limit=5&appid=1b913796ee84a17f196943d065f7b698&units=imperial


// api call for 5 day weather forecast
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}