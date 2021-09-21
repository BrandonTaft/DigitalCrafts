const searchBox = document.getElementById("searchBox")
const getWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=d751e2286916099559bfa3b1cf49b974&units=imperial'
const submitButton = document.getElementById("submitButton")
const divID = document.getElementById("divID")
const city = document.getElementById("city")
const description = document.getElementById("description")
const temp = document.getElementById("temp")
const request = searchBox.value

function getWeather() {
  fetch(getWeatherURL)
    .then(response =>{
    return response.json()
})
    .then((result) => {
        console.log(result)
        displayWeather(result)
    })
}



submitButton.addEventListener("click", function(){
    getWeather()


    })







function displayWeather(result){
    let weather = `<div>
    <div>${result.main.city}</div>
    <div>${result.main.description}</div>
    <div>${result.main.temp}</div>
    </div>`
    

divID.innerHTML = weather.join("")
}