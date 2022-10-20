const API_KEY = 'e4a0a33a5ae4fb253d47b67074a22f78';

const loadTemperature = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

function setElementById(id, text) {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}
const displayTemperature = (data) => {
    setElementById('temperature', data.main.temp);
    setElementById('weather-condition', data.weather[0].main)
}
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    setElementById('city-name', city);
    loadTemperature(city);
    searchField.value = '';
}
)
loadTemperature('Dhaka')