export default class Location {
    constructor() {

    }
    getLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let {latitude, longitude} = position.coords
                //console.log(latitude,longitude)
                fetch('https://api.opencagedata.com/geocode/v1/json?q='+ latitude +'+'+ longitude +'&key=540abbeebfba4128b2df9c9e8238e969')
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                    let components = data.results[0].components
                    document.getElementById("location").innerHTML = components.suburb + ", " + components.county
            }, (error) => {
                console.log(error.code)
            })
        })
    }
}
    setLocation() {
        window.addEventListener("load", this.getLocation)
    }
}
