export default class TodaysDate {
    constructor() {

    }
    getTodaysDate() {
        let today = new Date()
        let day = String(today.getDate()).padStart(2, '0')
        let month = String(today.getMonth()+1).padStart(2, '0')
        let year = today.getFullYear()
        document.getElementById("date-day").innerHTML = day
        document.getElementById("date-month").innerHTML = month
        document.getElementById("date-year").innerHTML = year
    }
    setTodaysDate() {
        this.getTodaysDate()
        setInterval(this.getTodaysDate, 3600000)
    }
}