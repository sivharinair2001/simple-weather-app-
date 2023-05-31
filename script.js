const API_KEY = 'a1534e08ba1747719c6182738233105'; // Replace with your own API key from a weather service provider

// Get references to HTML elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

// Attach event listener to the search button
searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeatherData(city);
  }
});

// Function to fetch weather data from the API
function getWeatherData(city) {
  fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
    .then(response => response.json())
    .then(data => {
      // Update UI with weather data
      cityName.textContent = data.location.name;
      temperature.textContent = `${data.current.temp_c}°C`;
      description.textContent = data.current.condition.text;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
