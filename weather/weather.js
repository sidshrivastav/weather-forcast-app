const request = require('request');

var weatherForecast = (lat, lng, callback) => {
    request({
        url : `https://api.darksky.net/forecast/YOUR_KEY/${lat},${lat}`,
        json : true
    }, (error, response, body) => {
        if(!error){
            callback(
                undefined, {
                    summary: body.currently.summary,
                    temperature: body.currently.temperature
                });
        } else {
            callback("Unable to connect");
        }
    })
}

module.exports = {
    weatherForecast
} 
