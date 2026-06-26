const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC', // dates are parsed as UTC midnight; avoid an off-by-one day
});

/**
 * Format a session date (and optional time) for display,
 * e.g. "3 July 2026" or "3 July 2026 · 5:30 PM".
 */
export function formatSessionDate(date?: Date, time?: string): string | undefined {
  if (!date) return undefined;
  const formatted = dateFormatter.format(date);
  return time ? `${formatted} · ${time}` : formatted;
}
