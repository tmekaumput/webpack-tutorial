const api = require('./api.js');
const welcomeUser = require('./welcomeuser.coffee');
welcomeUser('John');
api.getRates('USR', rates => console.log(rates));