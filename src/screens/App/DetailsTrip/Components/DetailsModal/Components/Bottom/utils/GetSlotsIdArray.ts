export const getSlotsIdArray = (values: any, availableDates: any) => {
  const { date, time } = values;
  let dates = availableDates.filter(
    (item: any) => item.available_date === date,
  );
  let times = dates.filter((item: any) => item.hour === time);
  let data3 = times.filter((item: any) => item.capacity > values.members);
  return times;
};
