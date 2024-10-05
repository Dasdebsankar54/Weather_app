const apiKey = '5d26b15bdfffb18a526c666388e7da79'; // Replace with your OpenWeatherMap API key

document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    getWeatherData(city);
});

function getWeatherData(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
            document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('City not found!');
        });
}
