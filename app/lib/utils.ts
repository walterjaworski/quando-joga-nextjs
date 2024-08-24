export function formatDate(dateString: Date) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function formatTime(dateString: Date) {
  const hours = String(dateString.getHours()).padStart(2, "0");
  const minutes = String(dateString.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}

export function extractNumberFromString(input: string): number | null {
  const match = input.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}
