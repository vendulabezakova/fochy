// index.js
const targetDate = new Date(2040, 0, 1, 0, 0, 0);

function updateCountdown() {
    const now = new Date();

    if (now >= targetDate) {
        document.querySelector(".countdown").innerHTML = "Hotovo.";
        return;
    }

    // Kalendářní rozdíl dní
    let temp = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let days = 0;
    while (temp < targetDate) {
        days++;
        temp.setDate(temp.getDate() + 1);
    }

    // Hodiny, minuty, sekundy (z aktuálního času)
    let hours = targetDate.getHours() - now.getHours();
    let minutes = targetDate.getMinutes() - now.getMinutes();
    let seconds = targetDate.getSeconds() - now.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Spustit hned a pak každou sekundu
updateCountdown();
setInterval(updateCountdown, 1000);
