const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49da7703b2d50bab507896f3d5b56a7c`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.main.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.main.temp_min;
      max_temp.innerHTML = response.main.temp_max;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Karachi");