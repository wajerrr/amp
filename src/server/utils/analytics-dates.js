function estFormatDate() {
  // EST
  const offset = -5.0;
  const clientDate = new Date();
  const minuteInMilliseconds = 60000;
  const currentTime =
    clientDate.getTime() +
    clientDate.getTimezoneOffset() * minuteInMilliseconds;
  const hourInMilliseconds = 3600000;
  const serverDate = new Date(currentTime + hourInMilliseconds * offset);
  return serverDate;
}

const hourOfTheDay = () => {
  // Returns the time of the event in EST time to the closest half hour.
  // Expected output examples
  // "11:00AM"
  // "13:30PM"
  const date = estFormatDate();
  const hours = date.getHours();
  // Round minutes to 0 or 30.
  const halfAnHour = 30;
  let minutes = Math.floor(date.getMinutes() / halfAnHour) * halfAnHour;
  minutes = minutes === 0 ? '00' : '30';
  let mid = 'AM';
  const halfDayHours = 12;
  if (hours > halfDayHours) {
    mid = 'pm';
  }
  return `${hours}:${minutes}${mid}`;
};

function getCurrentDay() {
  const date = new Date();
  return date.getDay();
}

function fullDate() {
  // Returns the date, day of week and weektype delimited by a pipe.
  // Expected outupt 27 october 2015|tuesday|weekday
  const date = estFormatDate();
  const weekDays = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const monthNames = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];
  const day = weekDays[date.getDay()];
  const month = monthNames[date.getMonth()];
  const firstWorkingDay = 0;
  const lastWorkingDay = 6;
  const weekday =
    date.getDay() === firstWorkingDay || date.getDay() === lastWorkingDay
      ? 'weekend'
      : 'weekday';
  return `${date.getDate()} ${month} ${date.getFullYear()}|${day}|${weekday}`;
}

export { hourOfTheDay, getCurrentDay, fullDate };
