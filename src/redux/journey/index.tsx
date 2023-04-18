import { createSlice } from '@reduxjs/toolkit';
import { EntityKeys } from 'redux/schema';
import thunks from './thunks';
import { RootState } from 'redux/store';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Tjourneys } from './model';

type TInitialValues = {
  journeys?: any;
  journey?: any;
  agencyJorneys?: any;
};

const initialValues: TInitialValues = {
  journeys: null,
  journey: null,
  agencyJorneys: null,
};

const slice = createSlice({
  name: EntityKeys.JOURNEYS,
  initialState: initialValues,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(thunks.doGetJourneys.fulfilled, (state, action) => {
      state.journeys = action.payload.data.data;
    });
    builder.addCase(thunks.doGetJourneys.rejected, (state, action) => {
      console.log(action);
      // Toast.show({ type: 'error', text2: action.payload.message });
    });
    builder.addCase(thunks.doGetJourney.fulfilled, (state, action) => {
      console.log(action, ' test ');
      state.journey = action.payload.data.data;
    });
    builder.addCase(thunks.doGetJourney.rejected, (state, action) => {
      console.log(action);
      // Toast.show({ type: 'error', text2: action.payload.message });
    });
    builder.addCase(thunks.doGetAgencyJourneys.fulfilled, (state, action) => {
      state.agencyJorneys = action.payload.data.data;
    });
    builder.addCase(thunks.doGetAgencyJourneys.rejected, (state, action) => {
      console.log(action);
      // Toast.show({ type: 'error', text2: action.payload.message });
    });
  },
});

const Journeys = {
  thunks,
  slice,
};

export const selectCurrentJourneys = (state: RootState) =>
  state.journeys.journeys;
export const selectCurrentJourney = (state: RootState) =>
  state.journeys.journey;
export const selectCurrentAgencyJourneys = (state: RootState) =>
  state.journeys.agencyJorneys;

export default Journeys;
