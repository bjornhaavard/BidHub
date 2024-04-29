export function parseDate(dateString, format = "%Y-%m-%d %H:%M:%S") {
  try {
    // Parse the date string using Date.parse or new Date() constructor
    const dateObj = new Date(dateString);

    // Format the date object according to the provided format string
    return dateObj.toLocaleDateString(undefined, format);
  } catch (error) {
    // Handle potential parsing errors (e.g., invalid date format)
    console.error("Error parsing date:", error);
    return "Invalid Date";
  }
}
