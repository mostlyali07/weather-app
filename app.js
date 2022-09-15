let date = new Date().toDateString();
document.getElementById("time").innerHTML += date;

const referesh = () => {
    window.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude)
    })
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=49da7703b2d50bab507896f3d5b56a7c`)
        .then((res) => res.json())
        .then((res) => {
            showDate(res)
        }).catch((err) => {
            console.log(err)
        })
}
