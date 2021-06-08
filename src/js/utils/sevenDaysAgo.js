export function sevenDaysAgo(date) {
  const data = new Date(date)
  const currentDay = data.getDate()
  data.setDate(currentDay - 6);

  return data.toISOString();
}
