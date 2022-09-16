let date = new Date().toDateString();
document.getElementById("time").innerHTML += date;

const referesh = () => {
    window.Geolocation.getCurrentPosition((position) => {
        console.log(position.coord.lat, position.coord.long);
    })
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=49da7703b2d50bab507896f3d5b56a7c`)
        .then((res) => res.json())
        .then((res) => {
            showDate(res)
        }).catch((err) => {
            console.log(err)
        })
}

function getData() {
    let search = document.getElementById('citySearch').value.toLowerCase().trim()
        //Calling API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=49da7703b2d50bab507896f3d5b56a7c`)
        .then((res) => res.json())
        .then((res) => {
            showData(res)
        }).catch((err) => {
            console.log(err)
        })
}
