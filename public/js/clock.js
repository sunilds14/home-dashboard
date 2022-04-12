export default class Clock {
    constructor() {
    }
    getTime() {
        let dt = new Date()
        let hr = String(dt.getHours()).padStart(2, '0')
        let min = String(dt.getMinutes()).padStart(2, '0')
        document.getElementById('clock-hr').innerHTML = hr
        document.getElementById('clock-min').innerHTML = min
    }
    displayTime() {
        setInterval(this.getTime, 10)
    }
 }