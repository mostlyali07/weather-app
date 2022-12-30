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
      max_temp.innerHTML = (response.main.temp_max - 273.15).toFixed(1);
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
