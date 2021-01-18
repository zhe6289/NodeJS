const request = require('postman-request')

    // const url = 'http://api.weatherstack.com/current?access_key=6a9b17fd8433fba05cc6be90dba24b1a&query=25,121.55'
    // const url = 'http://api.weatherstack.com/current?access_key=6a9b17fd8433fba05cc6be90dba24b1a&query=' + data.latitude + ',' + data.longitude

    // request({ url:url }, (error, response, body) => {
    //     const data = JSON.parse(response.body)
    //     if (error) {
    //         console.log('Unable to connect to internet')
    //     } else if (data.error) {
    //         console.log('Unable to find location')
    //     } else {
    //         console.log('weatherstack Location: ', data.location.country)
    //         console.log(data.current.weather_descriptions[0] + '. It is currently', data.current.temperature, 'degrees' + ', but it feels like', data.current.feelslike, 'degrees')
    //     }
    // })

const forecast = (latitude, longitude, callback) => {
    // const url = 'http://api.weatherstack.com/current?access_key=6a9b17fd8433fba05cc6be90dba24b1a&query=25,121.55'
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
                const weatherLog = data.current.weather_descriptions[0] + '. It is currently ' + data.current.temperature + ' degrees' + ', but it feels like ' + data.current.feelslike + ' degrees'
                callback(undefined, weatherLog)
            }
        }
    })
}

module.exports = forecast