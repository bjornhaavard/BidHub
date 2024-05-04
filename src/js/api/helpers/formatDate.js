export function shortenDateFormat(dateString) {
  const dateObject = new Date(dateString);

  // Example options for a short format:
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  // Format the date according to options
  const shortenedDate = dateObject.toLocaleDateString("no-NO", options); // Adjust locale if needed
  return shortenedDate;
}
