function updateClock() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const sec = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hrs').textContent = hrs;
    document.getElementById('min').textContent = min;
    document.getElementById('sec').textContent = sec;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately when the page loads
updateClock();



