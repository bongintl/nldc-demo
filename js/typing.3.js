var Promise = require('promise');

var tween = require('./lib/tween.js');

var DELAY = 50;

var element = document.querySelector('.sidebar__content');
var cursor = document.querySelector('.sidebar__dc');

var target = '';
var current = 0;

function typeCharacter () {
    
    return new Promise( (resolve, reject) => {
        
        function tap(){
            
            //console.log(current, target);
            
            if ( target.length ) {
                
                
                
                current++;
                
            } else {
                
                current--;
                
                //current = current.slice(0, current.length - 1);
                
            }
            
            element.innerHTML = `<span>${target.slice(0, current )}</span><span class="tracker">`;

            var tracker = element.querySelector('.tracker');
            
            console.log(tracker);
            
            var {top, left} = tracker.getBoundingClientRect();
            
            cursor.style.top = top + 'px';
            cursor.style.left = left + 'px';
            
            console.log( top, left );
            
            if ( current !== target.length ) {
                
                setTimeout( () => requestAnimationFrame(tap), DELAY )
                
            } else {
                
                setTimeout( resolve, DELAY )
                
            }
            
        }
        
        tap();
        
    })
    
    
}

function type ( what ) {
    
    return () => {
    
        target = what;
        return typeCharacter();
    
    }
    
}

function interrupt ( what ) {
    
    
    
}

module.exports = type;