const http = require('http')
const https = require('https')

const url = 'http://api.weatherstack.com/current?access_key=6a9b17fd8433fba05cc6be90dba24b1a&query=45,-75'

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()

