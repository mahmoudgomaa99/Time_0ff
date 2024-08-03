import moment from 'moment';

export const getDates = (Journeys: any) => {
  const Dates: any = {};
  Journeys?.map((journey: any) => {
    const newDateStr = moment(journey).format('YYYY-MM-DD');
    const isBeforeNow = moment(journey).isBefore(moment(), 'day');
    Dates[newDateStr] = {
      disabled: isBeforeNow,
    };
  });
  return Dates;
};
