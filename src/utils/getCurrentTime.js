export function currentTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    // Add leading zero if minutes is less than 10
    minutes = minutes < 10 ? "0" + minutes : minutes;

    // If hours are from 1 to 11, pad with leading zero
    if (hours >= 1 && hours <= 11) {
        hours = hours < 10 ? "0" + hours : hours;
    }

    return `${hours}:${minutes}`;
}