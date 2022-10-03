let currentDay = new Date();
let cityFormEl = document.querySelector("#city-form");
let cityNameInputEl = document.querySelector("#cityname");
let currentWeatherEl = document.querySelector('#current-weather');
let currentWeatherCardEl = document.querySelector("#current-weather-card");
let fiveDayCardEl = document.querySelector("#five-day-card");
let fiveDayEl = document.querySelector("#five-day-body");
let weatherStatusEl = document.querySelector('#weather-status');
let searchEl = document.querySelector('#search');
let historyButtonsEl = document.querySelector("#history-buttons");
let historyCardEl = document.querySelector("#history");
let searchHistoryArray = [];


let formSubmitHandler = function (event) {
    event.preventDefault();
    // get city name value from input element
    let cityname = cityNameInputEl.value.trim();

    // Save city name in local storage and create history buttons 
    if (cityname) {
        searchHistoryArray.push(cityname);
        localStorage.setItem("weatherSearch", JSON.stringify(searchHistoryArray));
        let searchHistoryEl = document.createElement('button');
        searchHistoryEl.className = "btn";
        searchHistoryEl.setAttribute("data-city", cityname)
        searchHistoryEl.innerHTML = cityname;
        historyButtonsEl.appendChild(searchHistoryEl);
        historyCardEl.removeAttribute("style")
        getWeatherInfo(cityname);
        cityNameInputEl.value = "";
    }
    else {
        alert("Enter a city");
    }

}

// Get weather information from OpenWeather
let getWeatherInfo = function (cityname) {
    let apiCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=1b913796ee84a17f196943d065f7b698`;
    fetch(
       
        apiCityUrl
    )
        .then(function (cityResponse) {
            return cityResponse.json();
        })
        .then(function (cityResponse) {
            console.log(cityResponse)
            let latitude = cityResponse.coord.lat;
            let longitude = cityResponse.coord.lon;

            // City name, current date and icon information for current Weather heading
            let city = cityResponse.name;
            let date = (currentDay.getMonth() + 1) + '/' + currentDay.getDate() + '/' + currentDay.getFullYear();
            let weatherIcon = cityResponse.weather[0].icon;
            let weatherDescription = cityResponse.weather[0].description;
            let weatherIconLink = `<img src='http://openweathermap.org/img/wn/${weatherIcon}@2x.png${weatherDescription}'/>`

            // Empty Current Weather element for new data
            currentWeatherEl.textContent = "";
            fiveDayEl.textContent = "";

          
            weatherStatusEl.innerHTML = city + " (" + date + ") " + weatherIconLink;

            
            currentWeatherCardEl.classList.remove("hidden");
            fiveDayCardEl.classList.remove("hidden");

            // Return a fetch request to the OpenWeather 
            return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts,minutely,hourly&units=imperial&appid=1b913796ee84a17f196943d065f7b698`);
        })
        .then(function (response) {
            // return response in json format
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            // send response data to displayWeather function for final display 
            displayWeather(response);

        });
};

// Display the weather on page
let displayWeather = function (weather) {
    // check if api returned any weather data
    if (weather.length === 0) {
        weatherContainerEl.textContent = "No data found.";
        return;
    }
    // Create Temperature element
    let temperature = document.createElement('p');
    temperature.id = "temperature";
    temperature.innerHTML = "<strong>Temperature:</strong> " + weather.current.temp.toFixed(1) + "°F";
    currentWeatherEl.appendChild(temperature);

    // Create Humidity element
    let humidity = document.createElement('p');
    humidity.id = "humidity";
    humidity.innerHTML = "<strong>Humidity:</strong> " + weather.current.humidity + "%";
    currentWeatherEl.appendChild(humidity);

    // Create Wind Speed element
    let windSpeed = document.createElement('p');
    windSpeed.id = "wind-speed";
    windSpeed.innerHTML = "<strong>Wind Speed:</strong> " + weather.current.wind_speed.toFixed(1) + " MPH";
    currentWeatherEl.appendChild(windSpeed);

    // Create uv-index element
    let uvIndex = document.createElement('p');
    let uvIndexValue = weather.current.uvi.toFixed(1);
    uvIndex.id = "uv-index";
    uvIndex.innerHTML = "<strong>UV Index:</strong> <span>" + uvIndexValue + "</span>";
    currentWeatherEl.appendChild(uvIndex);

    // still need extended forecast data
  

}




cityFormEl.addEventListener("submit", formSubmitHandler);



