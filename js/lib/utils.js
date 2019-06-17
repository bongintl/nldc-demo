var Promise = require('promise');

function wait(duration){
    return () => {
        return new Promise( r => setTimeout(r, duration) );
    }
}

module.exports = {wait};