// let date = new Date().toDateString();
// document.getElementById("time").innerHTML += date;

// const referesh = () => {
//     window.Geolocation.getCurrentPosition((position) => {
//         console.log(position.coord.lat, position.coord.long);
//     })
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=49da7703b2d50bab507896f3d5b56a7c`)
//         .then((res) => res.json())
//         .then((res) => {
//             showDate(res)
//         }).catch((err) => {
//             console.log(err)
//         })
// }

// function getData() {
//     let search = document.getElementById('citySearch').value.toLowerCase().trim()
//         //Calling API
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=49da7703b2d50bab507896f3d5b56a7c`)
//         .then((res) => res.json())
//         .then((res) => {
//             showData(res)
//         }).catch((err) => {
//             console.log(err)
//         })
// }


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bcddf4ec12msh718a61341bd3869p139037jsn36f1f5fb4ab0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=karachi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));