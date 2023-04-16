let container = document.querySelector('.timer')
let miliSec = 0;
let sec = 0;
let min =  0;
let hours = 0;
let interval = false ;
document.querySelector('.start').addEventListener('click', start);
document.querySelector('.stop').addEventListener('click', stop)
document.querySelector('.reset').addEventListener('click', reset)

function start() {
  if(interval == false) {
    interval = setInterval(time, 10)
    
  }
}
function stop() {
    clearInterval(interval)
    interval = false
}
function reset() {
    if( container.innerHTML != '00:00:00:00') {
        clearInterval(interval)
        interval = false
        container.innerHTML = `00:00:00:00`
        miliSec = 0;
        sec = 0;
        min =  0;
        hours = 0;

    }

}
function time() {
    
container.innerHTML = `${fixZero(hours)}:${fixZero(min)}:${fixZero(sec)}:${fixZero(miliSec)}`

if(miliSec <= 99) {
    miliSec++
} if(miliSec > 99) {
    miliSec = 0;
    sec++
}  if(sec >59) {
    sec = 0;
    min++
} if (min > 59) {
    min = 0;
    hours++
}

}
function fixZero(time) {
    return time < 10? '0'+time : time; 
}
 
