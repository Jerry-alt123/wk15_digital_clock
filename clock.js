const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setClockFace() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    var time = padTwo(hours) + ":" + padTwo(minutes) + ":" + padTwo(seconds);
    const digitalClock = document.querySelector('.time');
    digitalClock.innerHTML = time;
    
}

function padTwo(number) {
    return (number < 10 ? '0' : '') + number;
}
//1000 milliseconds is one second
setInterval(setClockFace, 1000);