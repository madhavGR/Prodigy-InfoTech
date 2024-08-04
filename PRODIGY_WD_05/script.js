async function getWeather() {
    const location = document.getElementById('location-input').value;
    const apiKey = 'YOUR_API_KEY';  // Replace with your actual API key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Location not found');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    const weatherInfo = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Conditions: ${data.weather[0].description}</p>
    `;
    weatherDiv.innerHTML = weatherInfo;
}

navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = 'YOUR_API_KEY';  // Replace with your actual API key
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Unable to retrieve weather');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
});
