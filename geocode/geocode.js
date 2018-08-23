const request = require('request');

var geocodeAddress = (address, callback) => {
    encodedAddress = encodeURIComponent(address)

    request({
        url : "http://maps.googleapis.com/maps/api/geocode/json?address="+encodedAddress,
        json : true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect!');
        }
        else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to find address!')
        }
        else{
            callback(
                undefined, {
                    address: body.results[0].formatted_address, 
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
        }
    })
}

module.exports = {
    geocodeAddress
} 