export default function formatDate(date) {
  if (date instanceof Date !== true || date.toString() === 'Invalid Date')
    return '';
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
  return [
    `${shortMonthList[date.getMonth()]}`,
    `${addPostFix(date.getDate())}`,
    `${date.getFullYear()}`,
  ].join(' ');
}

const getISODate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toISOString();
};

export { getISODate };
