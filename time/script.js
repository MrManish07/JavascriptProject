let hour = document.querySelector( ".hour" );
let minute = document.querySelector( ".minute" );
let second = document.querySelector( ".second" );
let milliseconds = document.querySelector( ".microSec" );

setInterval( () => {
    let date = new Date();
    let getHour = date.getHours();
    let getMinutes = date.getMinutes();
    let getSeconds = date.getSeconds();
    let getmilliSec = date.getMilliseconds();
    hour.textContent = ( getHour < 10 ? "0" : "" ) + getHour;
    minute.textContent = ( getMinutes < 10 ? "0" : "" ) + getMinutes;
    second.textContent = ( getSeconds < 10 ? "0" : "" ) + getSeconds;
    milliseconds.textContent = ( getmilliSec < 100 ? ( getmilliSec < 10 ? "00" : "0" ) : "" ) + getmilliSec;
}, 100 );




