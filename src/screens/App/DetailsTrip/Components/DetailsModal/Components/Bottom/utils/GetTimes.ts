import moment from 'moment';

export const getTimes = (availabilityJourneys: any, date: any) => {
  let dates = availabilityJourneys.filter(
    (item: any) => item.available_date === date,
  );
  const Times: any = [];
  dates?.forEach((item: any) => {
    Times.push({
      label: item.hour.slice(0, 5),
      value: item._id,
    });
  });
  return Times;
};
