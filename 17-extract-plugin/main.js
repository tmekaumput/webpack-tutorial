// styles
require('styles/main');

// scripts
const api = require('Api/users');
const welcomeUser = require('welcomeUser');
const reactApp = require('./react/ReactApp');

api.getRates('USD', fxRates => console.log(fxRates));
welcomeUser('John');
//api.getRates('USR', rates => console.log(rates));