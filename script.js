var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');

function updateClock() {
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    if (h > 12) {
        h = h - 12;
    }

    var hourDeg = (h / 12) * 360;
    hour.style.transform = `rotate(${hourDeg}deg)`;

    var minuteDeg = (m / 60) * 360;
    minute.style.transform = `rotate(${minuteDeg}deg)`

    var secondDeg = (s / 60) * 360;
    second.style.transform = `rotate(${secondDeg}deg)`;
}
setInterval(updateClock, 1000)