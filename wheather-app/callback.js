// setTimeout(() => {
//     console.log('Two seconds are up')
//  }, 2000)

//  const geocode = (address, callback) => {
//      setTimeout(() => {
//          const data = {
//              latitude: 0,
//              longitude: 0
//          }

//          callback(data)
//      }, 2000)
//  }

//  geocode('Philadelphia', (data) => {
//     console.log(data)
//  })

const request = require('request')

const geocode = (address,callback) =>{
    console.log(address)

const geocodeURL= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoic2FyaWthMTIzIiwiYSI6ImNsajVqYTd5azBlZGczcG54bHEwdGQxcjMifQ.3NQ0D87KM-m7uE8YtjsI-g&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        callback('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        callback('Unable to find location. Try another search.')
    } else {
        
        callback(undefined,{
         latitude : response.body.features[0].center[0],
         longitude : response.body.features[0].center[1]
        })
    }
})

}

module.exports = geocode