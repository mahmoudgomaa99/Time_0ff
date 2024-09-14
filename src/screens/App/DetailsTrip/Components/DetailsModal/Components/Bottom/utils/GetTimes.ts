import moment from 'moment';

export const getTimes = (availabilityJourneys: any) => {
  return availabilityJourneys?.map((slot: any) => {
    return {
      value: slot?._id,
      label:
        slot?.start_hour?.slice(0, 5) + ' - ' + slot?.end_hour?.slice(0, 5),
    };
  });
};
