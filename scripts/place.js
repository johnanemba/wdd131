// Wind Chill Calculation Function
function calculateWindChill(temp, speed) {
  return (temp <= 10 && speed > 4.8)
    ? `${Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16))}°C`
    : 'N/A';
}

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  const temp = parseFloat(document.getElementById("temp").textContent);
  const speed = parseFloat(document.getElementById("wind-speed").textContent);
  const windChill = calculateWindChill(temp, speed);

  document.getElementById("wind-chill").textContent = windChill;

  // Footer Year and Last Modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
});
