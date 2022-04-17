export default class Weather {
    constructor() {

    }
    getWeather() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let {latitude, longitude} = position.coords
                console.log(latitude,longitude)
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=c00f7ea556ad6bd0c27e8193bde81080')
                   .then(response => response.json())
                   .then(data => {
                    document.getElementById("weather-temp").innerHTML = Math.trunc(data.main.temp)
                    document.getElementById("weather-icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
                }, (error) => {
                    console.log(error.code)
                })
        })
    }
}
    setWeather() {
        this.getWeather()
        setInterval(this.getWeather, 1000 * 60 * 60)
    }
}