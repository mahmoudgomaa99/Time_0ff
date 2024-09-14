export const FormateLocationChoices = (locations: any) => {
  return locations.map((location: any) => {
    return {
      value: location.value,
      label: location.value,
    };
  });
};
