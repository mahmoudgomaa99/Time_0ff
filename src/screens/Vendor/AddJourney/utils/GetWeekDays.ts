export const GetWeekDays = () => {
  let days;
  days = Array.from({ length: 7 }, (_, i) => ({
    value: i,
    label: getDayLabel(i),
  }));
  return days;
};

const getDayLabel = (day: number) => {
  switch (day) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return '';
  }
};
