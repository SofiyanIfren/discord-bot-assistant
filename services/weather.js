/* For temperature in Fahrenheit use units=imperial
*  For temperature in Celsius use units=metric
*  Temperature in Kelvin is used by default, no need to use units parameter in API call */

const fetch  = require("node-fetch")
const config = require("../config.json")

async function getCityWeather (city) {
    let celciusTemp   = ''
    let farenheitTemp = ''
    let description   = ''
    await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.toLowerCase()+'&appid='+config.WEATHER_API_KEY+'&units=metric')
        .then((data) => data.json().then((res) => {
            celciusTemp = res.main.temp
            description = res.weather[0].description
        }))
    await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.toLowerCase()+'&appid='+config.WEATHER_API_KEY+'&units=imperial')
        .then((data) => data.json().then((res) => {
            farenheitTemp = res.main.temp
        }))
    return celciusTemp +' °C / '+ farenheitTemp +' °F ('+description +')'
}

module.exports = {getCityWeather}