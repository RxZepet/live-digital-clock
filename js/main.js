const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock(){

    let hr = new Date().getHours();
    let mins = new Date().getMinutes();
    let secs = new Date().getSeconds();
    let ampm = "AM";

    if (hr > 12){
        hr = hr - 12;
        ampm = "PM";
    }

    hr = hr < 10 ? "0" + hr : hr;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    hourElement.innerText = hr;
    minuteElement.innerText = mins;
    secondElement.innerText = secs;
    ampmElement.innerText = ampm;

    setTimeout(() => {
        updateClock();
    },1000);

}
updateClock();