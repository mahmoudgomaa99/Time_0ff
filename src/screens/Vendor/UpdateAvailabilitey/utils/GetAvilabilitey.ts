export const GetAvailabilitey = (
  data: {
    date: string;
    details: {
      _id: number;
      hour: string;
      capacity: number;
      numberOfBookings: number;
    }[];
  }[],
) => {
  let newData: any = [];
  for (let i = 0; i < data.length; i++) {
    newData.push({
      date: data[i].date,
      details: data[i].details.map(item => {
        return {
          _id: item._id,
          hour: item.hour,
          capacity: item.capacity,
        };
      }),
    });
  }

  return newData;
};
export const GetAvailabiliteyForString = (
  data: {
    date: string;
    details: {
      _id: number;
      hour: string;
      capacity: number;
      numberOfBookings: number;
    }[];
  }[],
) => {
  let newData: any = [];
  for (let i = 0; i < data.length; i++) {
    newData.push({
      date: data[i].date,
      details: data[i].details.map(item => {
        return {
          _id: item._id,
          hour: item.hour,
          capacity: item.capacity.toString(),
        };
      }),
    });
  }

  return newData;
};
