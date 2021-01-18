const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6a9b17fd8433fba05cc6be90dba24b1a&query=' + latitude + ',' + longitude
    request({ url:url }, (error, response) => {
        if (error) {
            callback('Unable to connect to internet', undefined)
        }
        if (response) {
            const data = JSON.parse(response.body)
            if (data.error) {
                callback('Unable to find location', undefined)
            } else {
                console.log(data)
                const weatherLog = 
                data.current.weather_descriptions[0] + 
                '. It is currently ' +
                data.current.temperature + 
                ' degrees'+ 
                ', but it feels like ' + 
                data.current.feelslike + 
                ' degrees' + 
                '. The humidity is ' +
                data.current.humidity + 
                '. The blowing wind speed is' +
                data.current.wind_speed + 
                ' km/h' + 
                '. There is a ' + 
                data.current.precip + 
                '% chance of raining. '
                callback(undefined, weatherLog)
            }
        }
    })
}

module.exports = forecast