const request = require('request');

var weatherForecast = (lat, lng, callback) => {
    request({
        url : `https://api.darksky.net/forecast/2b34043782014e8c0deb9f4b0054a1c9/${lat},${lat}`,
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