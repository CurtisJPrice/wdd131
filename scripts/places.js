document.addEventListener('DOMContentLoaded', () => {
    // Set the current year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Set the last modified date
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // Calculate wind chill (assuming this is also needed)
    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('windSpeed').textContent);
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windchill').textContent = windChill.toFixed(2) + '°C';
});

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    } else {
        return temp;
    }
}