const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49da7703b2d50bab507896f3d5b56a7c`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      country.innerHTML = response.sys.country;
      temp.innerHTML = (response.main.temp - 273.15).toFixed(1);
      sunrise.innerHTML = response.sys.sunrise;
      sunset.innerHTML = response.sys.sunset;
      min_temp.innerHTML = (response.main.temp_max - 273.15).toFixed(1);
      max_temp.innerHTML = (response.main.temp_min - 273.15).toFixed(1);
      main.innerHTML = response.weather[0].main;
      description.innerHTML = response.weather[0].description;
      let locationIcon = document.querySelector(".weather-icon");
      const { icon } = response.weather[0];
      locationIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png"/>`;
      wind.innerHTML = response.wind.deg;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Karachi");


const California = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=California&appid=49da7703b2d50bab507896f3d5b56a7c"
  )
    .then((response) => response.json())
    .then((response) => {
      CaliforniaName.innerHTML = (response.main.temp - 273.15).toFixed(1);
      CaliforniaMax.innerHTML = (response.main.temp_max - 273.15).toFixed(1);
      CaliforniaMin.innerHTML = (response.main.temp_min - 273.15).toFixed(1);
      CaliforniaFeels.innerHTML = (response.main.feels_like - 273.15).toFixed(1);
      Californialon.innerHTML = response.coord.lon;
      Californialat.innerHTML = response.coord.lat;
      CaliforniaSunrise.innerHTML = response.sys.sunrise;
      CaliforniaSunset.innerHTML = response.sys.sunset;
      main.innerHTML = response.weather[0].main;
      let locationIcon = document.getElementById("CaliforniaIcon");
      const { icon } = response.weather[0];
      locationIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png"/>`;
    })
    .catch((err) => console.error(err));
};

California();