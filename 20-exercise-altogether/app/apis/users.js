var jquery = require('jquery');

module.exports = {
    getRates: function(baseCurrency, callback) {
        jquery.getJSON('http://data.fixer.io/api/latest?access_key=f19eb6e6b24db4639b0ee3d6d0cb349a&format=1&symbols=' + baseCurrency, function(fxRates) {
            console.log('---------------------');
            console.log(fxRates);
            console.log('---------------------');
            callback(fxRates);
        });
    },

    getUsers: function() {
        return [
            {
                name: 'alex',
                age:  28
            },
            {
                name: 'anna',
                age: 38
            },
            {
                name: 'alisa',
                age: 8
            },
            {
                name: 'alesha',
                age: 35
            }
        ];
    }

};