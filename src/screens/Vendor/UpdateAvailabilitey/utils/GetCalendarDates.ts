import moment from 'moment';

export const getCalendarDates = (Journeys: any) => {
  const Dates: any = {};
  Journeys?.map((journey: any) => {
    const newDateStr = moment(journey).format('YYYY-MM-DD');
    Dates[newDateStr] = {
      disabled: false,
    };
  });
  return Dates;
};
