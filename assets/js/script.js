// let weather = {
//     apiKey: "1b913796ee84a17f196943d065f7b698",
//     fetchWeather: function() {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`) 
//         .then((response) => response.json()) 
//         .then((data) => console.log(data));
// }
// };

let weather = {
    apiKey: "1b913796ee84a17f196943d065f7b698",
    fetchWeather: function() {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=imperial&exclude=hourly,daily&appid=${this.apiKey}`) 
        .then((response) => response.json()) 
        .then((data) => console.log(data));
}
};

