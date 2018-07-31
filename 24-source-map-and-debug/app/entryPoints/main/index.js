// styles
require('./styles/main');

// scripts
const api = require('Api/users');
const welcomeUser = require('welcomeUser');

require('reactApp');

console.log(process.env.NODE_ENV);

api.getRates('USD', fxRates => console.log(fxRates));
welcomeUser('John');

//api.getRates('USR', rates => console.log(rates));
