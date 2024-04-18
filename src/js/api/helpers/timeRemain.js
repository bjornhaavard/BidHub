export function getTimeRemaining(endTime) {
  const now = new Date();
  const endDate = new Date(endTime);
  const difference = endDate - now;

  // Handle cases where the listing has already ended
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const seconds = Math.floor((difference / 1000) % 60);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

export function formatCountdown(timeObject) {
  const { days, hours, minutes, seconds } = timeObject;
  const daysString = days > 0 ? `${days}d ` : "";
  const hoursString = hours.toString().padStart(2, "0") + ":";
  const minutesString = minutes.toString().padStart(2, "0") + ":";
  const secondsString = seconds.toString().padStart(2, "0");
  console.log(daysString, hoursString, minutesString, secondsString);
  return `<span class="math-inline">${daysString}</span>${hoursString}<span class="math-inline">${minutesString}</span>${secondsString}`;
}
