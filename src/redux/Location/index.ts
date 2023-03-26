import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
const initial_values = {
  location: {
    lat: 0,
    lang: 0,
  },
};
const slice = createSlice({
  name: 'location',
  initialState: initial_values,
  reducers: {
    setLocation: (
      state,
      {
        payload,
      }: {
        payload: {
          location: {
            lat: any;
            lang: any;
          };
        };
      },
    ) => {
      state.location = payload.location;
    },
  },
});
const Location = {
  slice,
  setLocation: slice.actions.setLocation,
};
export default Location;
export const selectLocation = (state: RootState) => state.location.location;
