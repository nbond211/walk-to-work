export default function formatGPSCoords(gpsData) {
    const degrees = gpsData[0];
    const minutes = gpsData[1];
    const seconds = gpsData[2];
    return `${degrees}° ${minutes}' ${seconds}"`;
}