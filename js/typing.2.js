var Promise = require('promise');

var DELAY = 10;

var element = document.querySelector('.typer__content');

var target = [];
var current = 0;

function typeCharacter () {
    
    return new Promise( (resolve, reject) => {
        
        function tap(){
            
            if ( target.length ) {
                
                target[current].style.opacity = 1;
                
                current++;
                
                //current = target.slice(0, current.length + 1);
                
            } else {
                
                current--;
                
                target[current].style.opacity = 1;
                
                //current = current.slice(0, current.length - 1);
                
            }
            
            //current = target;
            
            //element.innerText = current;
            
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
        
        if( what.length ) element.innerHTML = '';
    
        target = what.split('').map(letter => {
            
            if(letter === ' ') letter = '&nbsp;'
            var span = document.createElement('span');
            span.innerHTML = letter;
            span.style.opacity = 0;
            element.appendChild(span);
            return span;
            
        });
        
        var promise = typeCharacter();
        
        return promise;
    
    }
    
}

function interrupt ( what ) {
    
    
    
}

module.exports = type;