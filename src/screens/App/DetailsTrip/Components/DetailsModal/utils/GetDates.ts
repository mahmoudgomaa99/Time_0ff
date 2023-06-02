import moment from 'moment';

export const getDates = (Journeys: any) => {
  const Dates: any = {};
  Journeys?.map((journey: any) => {
    const newDateStr = moment(journey.available_date).format('YYYY-MM-DD');
    Dates[newDateStr] = {
      disabled: false,
    };
  });
  return Dates;
};
