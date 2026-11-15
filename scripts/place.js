
// Get the current year
document.querySelector("#year").textContent = new Date().getFullYear();

// Get the last modified date
document.querySelector("#last-modified").textContent = document.lastModified;

// Static weather information
const temperature = 10;
const windSpeed = 5;

// Wind chill calculation function
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Display wind chill only when conditions are met
if (temperature <= 10 && windSpeed > 4.8) {
    document.querySelector("#wind-chill").textContent =
        calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
    document.querySelector("#wind-chill").textContent = "N/A";
}
