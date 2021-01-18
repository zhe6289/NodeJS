const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZXVnZW5lY2h1YSIsImEiOiJja2NvZGV6a2swazQzMnBxcnB4eHdjODY3In0.vc0z_GSJlFem05vMTkgWpQ&limit=1'

    request({ url:url }, (error, response) => {
        if (error) {
            callback('Unable to connect to internet', undefined)
        }
        if (response) {
            const data = JSON.parse(response.body)
            if (data.features.length === 0) {
                callback('Unable to find location. Try another search', undefined)
            } else {
                const latitude = data.features[0].center[1]
                const longitude = data.features[0].center[0]
                const location = data.features[0].place_name
                callback(undefined, {
                    latitude: latitude,
                    longitude: longitude,
                    location: location 
                })
            }
        }
    })
}

module.exports = geocode