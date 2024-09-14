export const getDates = (availability: any) => {
  return availability?.map((slot: any) => {
    return {
      value: slot,
      label: slot,
    };
  });
};
