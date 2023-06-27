const request = require('request')

const forecast = (latitude,longitute,callback) =>{
const url = 'https://api.weatherbit.io/v2.0/current?lat='+ latitude +'&lon='+ longitute +'&key=8619a52d81f8497a806630802879fc82&include=minutely'

request({ url: url }, (error, response) => {
    if(error){
        callback("Unable to connect to wheather services")
    }else{
        const cdata = JSON.parse(response.body)
        callback(undefined,{
            data : cdata.data[0].app_temp
           })
    }
})
}

module.exports = forecast