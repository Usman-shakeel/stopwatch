var hour = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start() {
    timer = true;
    stopwatch();
}


function stop() {
    timer = false;
}


function reset() {
    timer = false;

    hour = 0;
    min = 0;
    sec = 0;
    count = 0;
    
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("msec").innerHTML = count;
}

function stopwatch() {
    if(timer === true) {
        count += 1;
        if(count === 100){
            sec += 1;
            count = 0;
        }
        if(sec === 60) {
            min += 1;
            sec = 0;
        }
        if(min === 60){
            hour += 1
            min = 0;
            sec = 0;
        }

        document.getElementById("hour").innerHTML = hour;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("msec").innerHTML = count;
        setTimeout("stopwatch()" ,10);
    }
}