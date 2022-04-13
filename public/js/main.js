import Clock from './clock.js';
import Online from './online.js'
import TodaysDate from './date.js'
import Location from './location.js'

let clock = new Clock()
clock.displayTime()

let online = new Online()
online.setStatus()

let todaysDate = new TodaysDate()
todaysDate.setTodaysDate()

let location = new Location()
location.setLocation()