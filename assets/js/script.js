let searchEl = document.getElementById("search");

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
        document.querySelector(".icon").src = `http://openweathermap.org/img/w/${icon}.png`;
        document.querySelector(".temp").innerText = `${temp}°F`;
        document.querySelector(".wind").innerText = `Wind speed: ${speed}mp/h`;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
        displayFiveDay(data);
    },
    
};

function formatUnixTimeStamp(unixTime) {
const date = new Date (unixTime * 1000)
return date.toLocaleDateString("en-US")
}


function displayFiveDay(data) {
   // console.log(data);
    let lat = data.coord.lat;
    let lon = data.coord.lon;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&limit=5&appid=1b913796ee84a17f196943d065f7b698&units=imperial`)
        .then((fiveDayData) => fiveDayData.json().then((data1) => {
            let days = data1.daily.slice(1,6);
            console.log(days);
            for (let i = 0; i < days.length; i++) {
                let dateString = formatUnixTimeStamp(days[i].dt);
                console.log(dateString);
                let getTemp = days[i].temp.day;
                console.log(getTemp);
                let getHumidity = days[i].humidity;
                let wind = days[i].wind_speed;
                console.log(wind);
            }
        })) 
        
}




function getWeather() {
    let searchInput = searchEl.value
    // console.log(searchInput);
    weather.fetchWeather(searchInput);
}


// api call for 5 day weather forecast
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}