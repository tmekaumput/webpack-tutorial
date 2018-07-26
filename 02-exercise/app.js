const api = require('./api.js');
const jquery = require('jquery');

api.getRates('USD', function(fxRates) {
    console.log(fxRates);
});

