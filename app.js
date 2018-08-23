const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'Address for weather',
            string: true
        }        
    })
    .help()
    .argv;

geocode.geocodeAddress(argv['a'], (error, res) => {
    if(error){
        console.log(error);
    } else {
        weather.weatherForecast(res.latitude, res.longitude, (errorMsg, weatherRes) => {
            if(errorMsg){
                console.log(errorMsg);
            } else {
                console.log(`It is ${weatherRes.summary} outside with temperature of ${weatherRes.temperature}.`);
            }
        });
    }
});