var type = require('./typing.js');
var {wait} = require('./lib/utils.js');

wait(2000)()
    //.then( type('HELLO') )
    //.then( wait(2000) )
    //.then( type('') )
    .then( type('365 DAYS A YEAR, 300 MILLION PASSENGERS, 42 TERABYTES OF DATA TRANSFERRED') )
    // .then( wait(2000) )
    // .then( type('') );