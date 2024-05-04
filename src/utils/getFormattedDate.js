
export function formatDate(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
  
    let suffix = 'th';
    if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
      suffix = 'st';
    } else if (dayOfMonth === 2 || dayOfMonth === 22) {
      suffix = 'nd';
    } else if (dayOfMonth === 3 || dayOfMonth === 23) {
      suffix = 'rd';
    }
  
    return `${dayOfWeek}, ${month} ${dayOfMonth}${suffix}`;
}
  
