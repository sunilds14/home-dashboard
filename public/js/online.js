export default class Online {
    constructor() {
    }
    updateStatus() {
        if(navigator.onLine) {
            document.getElementById("status-icon").classList.add('online')
        } else {
            document.getElementById("status-icon").classList.remove('online')
        }
    }
    setStatus() {
        window.addEventListener("load", this.updateStatus)
        window.addEventListener("online", this.updateStatus)
        window.addEventListener("offline", this.updateStatus)
    }
} 