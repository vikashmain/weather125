function getWeather() {
    
    const city = document.getElementById('cityInput').value;
    const apiKey = '191fda308c3dbcc1151286456239a50f';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h2>Weather in ${city}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Wind Speed: ${data.wind.speed}km/h</p>
          <p>Humidity: ${data.main.humidity}%</p>
        `;
        const image = document.getElementById('vt');
        switch (data.weather[0].description) {
          case 'Clear':
              image.src = 'asset/Images/clear.png.jpg'
              break;
          case 'Cloud':
              image.src = 'asset/Images/cloud.png.jpg'
              break;
          case 'Rain':
              image.src = 'asset/Images/rain.png.jpg'
              break;
          case 'mist':
              image.src = 'asset/Images/mist.png.jpg'
              break;
          case 'Snow':
              image.src = 'asset/Images/snow.png.jpg'
              break;

          default:
              image.src = 'asset/Images/clear.png.jpg'
      }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = 'Error fetching weather data. Please try again later.';
      });
  }
  function getWeather2() {
    const about = document.getElementById('about')
    about.innerHTML = 'This site is developed by Vikash Tripathi'
  }
  function getWeather3() {
    const weather = document.getElementById('weather')
   weather.innerHTML = 'Weather is the state of the atmosphere, including temperature, atmospheric pressure, wind, humidity, precipitation, and cloud cover. It differs from climate, which is all weather conditions for a particular location averaged over about 30 years. '
    
    
  }