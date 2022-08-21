// TODO: add city param to html

let weather = {
    apiKey: "1b913796ee84a17f196943d065f7b698",
    fetchWeather: function(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${this.apiKey}`) 
        .then((response) => response.json()) 
        .then((data) => console.log(data));

}};

