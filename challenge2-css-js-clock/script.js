const secondHand = document.querySelector(".seconds-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
    const now = new Date();

    // seconds
    const seconds = now.getSeconds();
    const secondsDegrees = seconds / 60 * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //minutes
    const minutes = now.getMinutes();
    const minuteDegrees = minutes / 60 * 360 + 90;
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;

    //hours
    const hour = now.getHours();
    const hourDegrees = hour / 60 * 360 + 120;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    //removing flicking transition when reaching 90deg
    function checkError90Deg(e, deg) {
        if (deg === 90) {
            e.style.transition = "all 0.0s";
        }
    }
    checkError90Deg(secondHand, secondsDegrees);
    checkError90Deg(minHand, minuteDegrees);
    checkError90Deg(hourHand, hourDegrees);
}

setInterval(setDate, 1000);
