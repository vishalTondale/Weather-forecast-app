

document.getElementById("searchButton").addEventListener("click", searchWeather);

function searchWeather() {
    var city = document.getElementById("searchInput").value;
    var apiKey = "ce861698bf830520e67236f9cae801f9";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayWeather(data);
        })
        .catch(error => {
            console.log("Error:", error);
            alert("An error occurred. Please try again later.");
        });
}

function displayWeather(data) {
    var weatherIcon = document.getElementById("weatherIcon");
    var weatherDescription = document.getElementById("weatherDescription");
    var temperature = document.getElementById("temperature");
    var humidity = document.getElementById("humidity");
    var windSpeed = document.getElementById("windSpeed");

    weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">`;
    weatherDescription.textContent = data.weather[0].description;
    temperature.textContent = data.main.temp + "°C";
    humidity.textContent = "Humidity: " + data.main.humidity + "%";
    windSpeed.textContent = "Wind Speed: " + data.wind.speed + " m/s";
}
