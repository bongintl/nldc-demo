var Promise = require('promise');

var tween = require('./lib/tween.js');

var speed = .85;
var cursorX = 0;

var element = document.querySelector('.sidebar__content');
var cursor = document.querySelector('.sidebar__dc');

var target = '';
var current = '';

function typeCharacter () {
    
    cursor.classList.add('typing');
    
    return new Promise( (resolve, reject) => {
        
        function tap(){
            
            if ( target.length ) {
                
                current = target.slice(0, current.length + 1);
                
            } else {
                
                current = current.slice(0, current.length - 1);
                
            }
            
            var last = current[current.length - 1];
            var rest = current.slice(0, current.length - 1)
            
            var html = rest + '<span class="sidebar__content_hidden">' + last + '</span>';
            
            html += '<span class="sidebar__end">&#8203;</span>'
            
            element.innerHTML = html
            
            console.log(element.innerHTML);
            
            var end = element.querySelector('.sidebar__end').getBoundingClientRect();
            
            if( end.left < cursorX ) cursorX = cursor.style.left = 0;
            
            var delay = (end.left - cursorX) * (1/speed);
            
            console.log(delay);
            
            tween( cursorX, end.left, delay, x => cursor.style.left = x + 'px' );
            
            cursor.style.top = end.top + 'px'
            
            cursorX = end.left;
            
            if ( current.length !== target.length ) {
                
                setTimeout( () => requestAnimationFrame(tap), delay )
                
            } else {
                
                cursor.classList.remove('typing');
                
                setTimeout( resolve, delay )
                
            }
            
        }
        
        tap();
        
    })
    
    
}

function type ( what ) {
    
    return () => {
        
        if(what.length) what += ' ';
    
        target = what;
        return typeCharacter();
    
    }
    
}

function interrupt ( what ) {
    
    
    
}

module.exports = type;