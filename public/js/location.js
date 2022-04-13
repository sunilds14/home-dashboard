export default class Location {
    constructor() {

    }
    getLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let {latitude, longitude} = position.coords
                console.log(latitude,longitude)
                //fetch('https://api.opencagedata.com/geocode/v1/json?q=52.7172288+-1.1420841&key=540abbeebfba4128b2df9c9e8238e969')
                //    .then(response => response.json())
                //    .then(data => {
                //        console.log(data)
                //        let components = data.results[0].components
                //        document.getElementById("location").innerHTML = components.suburb + ", " + components.county}) 
            
                let data = {"documentation":"https://opencagedata.com/api","licenses":[{"name":"see attribution guide","url":"https://opencagedata.com/credits"}],"rate":{"limit":2500,"remaining":2481,"reset":1649894400},"results":[{"annotations":{"DMS":{"lat":"52\u00b0 43' 1.32168'' N","lng":"1\u00b0 8' 31.56360'' W"},"MGRS":"30UXD2549242412","Maidenhead":"IO92kr22wc","Mercator":{"x":-127138.102,"y":6896806.722},"OSM":{"edit_url":"https://www.openstreetmap.org/edit?way=511677638#map=16/52.71703/-1.14210","note_url":"https://www.openstreetmap.org/note/new#map=16/52.71703/-1.14210&layers=N","url":"https://www.openstreetmap.org/?mlat=52.71703&mlon=-1.14210#map=16/52.71703/-1.14210"},"UN_M49":{"regions":{"EUROPE":"150","GB":"826","NORTHERN_EUROPE":"154","WORLD":"001"},"statistical_groupings":["MEDC"]},"callingcode":44,"currency":{"alternate_symbols":[],"decimal_mark":".","html_entity":"&#x00A3;","iso_code":"GBP","iso_numeric":"826","name":"British Pound","smallest_denomination":1,"subunit":"Penny","subunit_to_unit":100,"symbol":"\u00a3","symbol_first":1,"thousands_separator":","},"flag":"\ud83c\uddec\ud83c\udde7","geohash":"gcr5yhb6gp7g8wu9v2yw","qibla":118.98,"roadinfo":{"drive_on":"left","road":"Orchard View","road_type":"residential","speed_in":"mph"},"sun":{"rise":{"apparent":1649826720,"astronomical":1649818860,"civil":1649824560,"nautical":1649821860},"set":{"apparent":1649876340,"astronomical":1649884320,"civil":1649878500,"nautical":1649881200}},"timezone":{"name":"Europe/London","now_in_dst":1,"offset_sec":3600,"offset_string":"+0100","short_name":"BST"},"what3words":{"words":"sketches.crumb.observers"}},"bounds":{"northeast":{"lat":52.7170338,"lng":-1.142101},"southwest":{"lat":52.7167918,"lng":-1.1431343}},"components":{"ISO_3166-1_alpha-2":"GB","ISO_3166-1_alpha-3":"GBR","_category":"road","_type":"road","city":"Charnwood","continent":"Europe","country":"United Kingdom","country_code":"gb","county":"Leicestershire","county_code":"LEC","postcode":"LE12 7HW","road":"Orchard View","road_type":"residential","state":"England","state_code":"ENG","state_district":"East Midlands","suburb":"Mountsorrel","village":"Rothley"},"confidence":9,"formatted":"Orchard View, Rothley, LE12 7HW, United Kingdom","geometry":{"lat":52.7170338,"lng":-1.142101}}],"status":{"code":200,"message":"OK"},"stay_informed":{"blog":"https://blog.opencagedata.com","twitter":"https://twitter.com/OpenCage"},"thanks":"For using an OpenCage API","timestamp":{"created_http":"Wed, 13 Apr 2022 16:12:07 GMT","created_unix":1649866327},"total_results":1}
                let components = data.results[0].components
                document.getElementById("location").innerHTML = components.suburb + ", " + components.county
        
            }, (error) => {
                console.log(error.code)
            })
        }
    }
    setLocation() {
        window.addEventListener("load", this.getLocation)
    }
}
