export default function formatDate(date) {
  const tenMinutes = 10;
  // Sep 19th 2015, 9:49
  function addPostFix(day) {
    const daystr = day.toString();
    const lastChar = daystr.charAt(daystr.length - 1);
    let postFix = '';
    switch (lastChar) {
      case '1':
        postFix = 'st';
        break;
      case '2':
        postFix = 'nd';
        break;
      case '3':
        postFix = 'rd';
        break;
      default:
        postFix = 'th';
        break;
    }
    return `${day}${postFix}`;
  }
  const shortMonthList = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let minutes = date.getMinutes() < tenMinutes ? '0' : '';
  minutes += date.getMinutes();
  return [
    `${shortMonthList[date.getMonth()]}`,
    `${addPostFix(date.getDate())}`,
    `${date.getFullYear()},`,
    `${date.getHours()}:${minutes}`,
  ].join(' ');
}
