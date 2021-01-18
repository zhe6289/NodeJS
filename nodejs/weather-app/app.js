const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/weatherstack')

const address = process.argv[2]

if (!address) {
    console.log('please provide an address')
} else {
    geocode(address, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
        forecast(data.latitude, data.longitude, (forecastError, forecastData) => {
            console.log(forecastError)
            console.log(forecastData)
        })
    })
}
