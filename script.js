const apiKey = 'a7bb69c9a17ed5334f10779379c3a799';

// Fetch weather data from OpenWeatherMap API
function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayWeatherData(data))
    .catch(error => console.log('Error:', error));
}

// Display weather data on the webpage
function displayWeatherData(data) {
  const weatherContainer = document.getElementById('weather-container');

  const cityName = document.createElement('h2');
  cityName.textContent = data.name;
  weatherContainer.appendChild(cityName);

  const temperature = document.createElement('p');
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  weatherContainer.appendChild(temperature);

  const weatherDescription = document.createElement('p');
  weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
  weatherContainer.appendChild(weatherDescription);
}

// Prompt the user for a city and fetch weather data
const city = prompt('Enter a city name:');
getWeatherData(city);