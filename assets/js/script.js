// TODO: add city param to html

let weather = {
    apiKey: "1b913796ee84a17f196943d065f7b698",
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${this.apiKey}`)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));

    },
    displayWeather: function (data) {
        const {
            name
        } = data;
        const {
            icon,
            description
        } = data.weather[0];
        const {
            temp,
            humidity
        } = data.main;
        const {
            speed
        } = data.wind;
        document.querySelector(".city").innerText = `Weather in ${name}`;

    }
};


// api call for 5 day weather forecast
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}