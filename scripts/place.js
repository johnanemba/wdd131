// Footer: Update Year and Last Modified Date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Wind Chill Calculation Function
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return Math.round(
            13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
        ) + "°C";
    }
    return "N/A"; // Not applicable if conditions aren't met
}

// Update Wind Chill Display
const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
document.getElementById("wind-chill").textContent = calculateWindChill(temperature, windSpeed);
