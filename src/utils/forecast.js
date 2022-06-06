const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=e8bcb48d5acfcd97bb823176fab605fc&query=' + latitude + ',' + longitude + '&units=f';
    request({uri: url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect Weather Stack Service', undefined);
        } else if (body.error) {
            callback('Unable to find location. Try another search term', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. There is a 0% chance of rain.')
        }
    });
}

module.exports = forecast;