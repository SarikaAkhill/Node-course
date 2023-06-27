const geocode = require ('./callback')
const forecast = require ('./callback2')
const request = require('request')


geocode('kakanad', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    forecast(data.latitude, data.longitude, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
    })
})




// const url = 'https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=8619a52d81f8497a806630802879fc82&include=minutely'

// request({ url: url }, (error, response) => {
//     if(error){
//         console.log("unable to connect")
//     }else{
//     const data = JSON.parse(response.body)
//     console.log(data)

//     console.log(data.data[0].app_temp)
//     }
// })

//challenge
// const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/kerala.json?access_token=pk.eyJ1Ijoic2FyaWthMTIzIiwiYSI6ImNsajVqYTd5azBlZGczcG54bHEwdGQxcjMifQ.3NQ0D87KM-m7uE8YtjsI-g&limit=1'

// request({ url: url }, (error, response) => {
//     if(error){
//         console.log("unable to connect")
//     }else{
//     const data = JSON.parse(response.body)
//     console.log(data)
//     console.log(data.features[0].place_name)
//     console.log(data.features[0].center)
//     }
// })

