let searchEl = document.getElementById("search");
let cardContainerEl = document.getElementById("card-container");

// fetches weather data from openweathermap
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
        saveCity(name)
        displayCitiesFromStorage()
        document.querySelector(".city").innerText = `Weather in ${name}`;
        document.querySelector(".icon").src = `http://openweathermap.org/img/w/${icon}.png`;
        document.querySelector(".temp").innerText = `${temp}°F`;
        document.querySelector(".wind").innerText = `Wind speed: ${speed}mp/h`;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
        displayFiveDay(data);
    },
    
};

// formats the time
function formatUnixTimeStamp(unixTime) {
const date = new Date (unixTime * 1000)
return date.toLocaleDateString("en-US")
}

// desplays the five day forcast to the dashboard
function displayFiveDay(data) {
   // console.log(data);
    let lat = data.coord.lat;
    let lon = data.coord.lon;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&limit=5&appid=1b913796ee84a17f196943d065f7b698&units=imperial`)
        .then((fiveDayData) => fiveDayData.json().then((data1) => {
            let days = data1.daily.slice(1,6);
            console.log(days);
            cardContainerEl.textContent = "";
            for (let i = 0; i < days.length; i++) {
                let dateString = formatUnixTimeStamp(days[i].dt);
                console.log(dateString);
                let getTemp = days[i].temp.day;
                console.log(getTemp);
                let getHumidity = days[i].humidity;
                let wind = days[i].wind_speed;
                console.log(wind);

                let icon = `https://openweathermap.org/img/w/${days[i].weather[0].icon}.png`
                console.log(icon);
                

                let cardDiv = document.createElement('div');
                cardDiv.setAttribute('class', 'card');
                
                let iconDisplay = document.createElement('img');
                iconDisplay.setAttribute('src', `https://openweathermap.org/img/w/${days[i].weather[0].icon}.png`);

                
                let dateDisplay = document.createElement('p');
                dateDisplay.setAttribute('class', 'date');
                dateDisplay.textContent = dateString;
                
                let tempDisplay = document.createElement('p');
                tempDisplay.setAttribute('class', 'temp');
                tempDisplay.textContent = `Temp: ${getTemp}° F`;

                let humidityDisplay = document.createElement('p');
                humidityDisplay.setAttribute('class', 'humidity');
                humidityDisplay.textContent = `Humidity: ${getHumidity}`;

                let windSpeedDisplay = document.createElement('p');
                windSpeedDisplay.setAttribute('class', 'wind');
                windSpeedDisplay.textContent = `Wind: ${wind} MPH`

                cardDiv.append(dateDisplay, tempDisplay, humidityDisplay, windSpeedDisplay, iconDisplay);
                cardContainerEl.append(cardDiv);
            }
        })) 
        
}

// saves the cities searched to local storage
function saveCity (city) {
    let citiesFromStorage = localStorage.getItem('cities') ? JSON.parse(localStorage.getItem('cities')) : [];
    if (!citiesFromStorage.includes(city)) {
        citiesFromStorage.push(city)
    }

    localStorage.setItem('cities', JSON.stringify(citiesFromStorage));

}

// displays the cities previously searched below the searchbar 
function displayCitiesFromStorage () {
    let citiesFromStorage = localStorage.getItem('cities') ? JSON.parse(localStorage.getItem('cities')) : [];
    let historyDiv = document.getElementById('history');
    historyDiv.innerHTML = "";
    for (let i = 0; i < citiesFromStorage.length; i++) {
        let historyButton = document.createElement('button');
        historyButton.setAttribute("id", "saved-btn");
        historyButton.textContent = citiesFromStorage[i];
        historyButton.addEventListener('click', function(){
            weather.fetchWeather(citiesFromStorage[i])
        }) 
        historyDiv.append(historyButton);
    }
}


// search button click event calls the fetchWeather function
function getWeather() {
    let searchInput = searchEl.value
    // console.log(searchInput);
    weather.fetchWeather(searchInput);
}

displayCitiesFromStorage();
