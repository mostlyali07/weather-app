const getWeather = (city) => {
  if (city == "") {
    swal("Error!", "Please Enter City!", "error");
  }
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


const Angeles = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=los Angeles&appid=49da7703b2d50bab507896f3d5b56a7c"
  )
    .then((response) => response.json())
    .then((response) => {
      AngelesName.innerHTML = (response.main.temp - 273.15).toFixed(1);
      AngelesMax.innerHTML = (response.main.temp_max - 273.15).toFixed(1);
      AngelesMin.innerHTML = (response.main.temp_min - 273.15).toFixed(1);
      AngelesFeels.innerHTML = (response.main.feels_like - 273.15).toFixed(1);
      Angeleslon.innerHTML = response.coord.lon;
      Angeleslat.innerHTML = response.coord.lat;
      AngelesSunrise.innerHTML = response.sys.sunrise;
      AngelesSunset.innerHTML = response.sys.sunset;
      main.innerHTML = response.weather[0].main;
      let locationIcon = document.getElementById("AngelesIcon");
      const { icon } = response.weather[0];
      locationIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png"/>`;
    })
    .catch((err) => console.error(err));
};

Angeles();

const Francisco = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=49da7703b2d50bab507896f3d5b56a7c"
  )
    .then((response) => response.json())
    .then((response) => {
      FranciscoName.innerHTML = (response.main.temp - 273.15).toFixed(1);
      FranciscoMax.innerHTML = (response.main.temp_max - 273.15).toFixed(1);
      FranciscoMin.innerHTML = (response.main.temp_min - 273.15).toFixed(1);
      FranciscoFeels.innerHTML = (response.main.feels_like - 273.15).toFixed(1);
      Franciscolon.innerHTML = response.coord.lon;
      Franciscolat.innerHTML = response.coord.lat;
      FranciscoSunrise.innerHTML = response.sys.sunrise;
      FranciscoSunset.innerHTML = response.sys.sunset;
      main.innerHTML = response.weather[0].main;
      let locationIcon = document.getElementById("FranciscoIcon");
      const { icon } = response.weather[0];
      locationIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png"/>`;
    })
    .catch((err) => console.error(err));
};

Francisco();

const Texas = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Texas&appid=49da7703b2d50bab507896f3d5b56a7c"
  )
    .then((response) => response.json())
    .then((response) => {
      TexasName.innerHTML = (response.main.temp - 273.15).toFixed(1);
      TexasMax.innerHTML = (response.main.temp_max - 273.15).toFixed(1);
      TexasMin.innerHTML = (response.main.temp_min - 273.15).toFixed(1);
      TexasFeels.innerHTML = (response.main.feels_like - 273.15).toFixed(1);
      Texaslon.innerHTML = response.coord.lon;
      Texaslat.innerHTML = response.coord.lat;
      TexasSunrise.innerHTML = response.sys.sunrise;
      TexasSunset.innerHTML = response.sys.sunset;
      main.innerHTML = response.weather[0].main;
      let locationIcon = document.getElementById("TexasIcon");
      const { icon } = response.weather[0];
      locationIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png"/>`;
    })
    .catch((err) => console.error(err));
};

Texas();