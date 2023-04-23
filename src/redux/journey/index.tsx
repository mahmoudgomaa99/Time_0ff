import { createSlice } from '@reduxjs/toolkit';
import { EntityKeys } from 'redux/schema';
import thunks from './thunks';
import { RootState } from 'redux/store';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Tagency, Tjourneys } from './model';

type TInitialValues = {
  journeys: Tjourneys;
  journey?: any;
  agencyJorneys?: any;
  agencyReviews?: any;
  agency?: Tagency;
  discountJourneys: Tjourneys;
};

const initialValues: TInitialValues = {
  journeys: [],
  journey: null,
  agencyJorneys: null,
  agencyReviews: null,
  agency: undefined,
  discountJourneys: [],
};

const slice = createSlice({
  name: EntityKeys.JOURNEYS,
  initialState: initialValues,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(thunks.doGetJourneys.fulfilled, (state, action) => {
      console.log(action);
      state.journeys = action.payload.data.data;
    });
    builder.addCase(thunks.doGetJourneys.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doGetDiscountJourneys.fulfilled, (state, action) => {
      console.log(action);
      state.discountJourneys = action.payload.data.data;
    });
    builder.addCase(thunks.doGetDiscountJourneys.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doGetJourney.fulfilled, (state, action) => {
      state.journey = action.payload.data.data;
      console.log(action);
    });
    builder.addCase(thunks.doGetJourney.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doGetAgencyJourneys.fulfilled, (state, action) => {
      state.agencyJorneys = action.payload.data.data;
    });
    builder.addCase(thunks.doGetAgencyJourneys.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doGetAgencyReviews.fulfilled, (state, action) => {
      state.agencyReviews = action.payload.data.data.reviews;
    });
    builder.addCase(thunks.doGetAgencyReviews.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doGetAgency.fulfilled, (state, action) => {
      console.log(action);
      state.agency = action.payload.data.data;
    });
    builder.addCase(thunks.doGetAgency.rejected, (state, action) => {
      console.log(action);
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
export const selectCurrentAgencyReviews = (state: RootState) =>
  state.journeys.agencyReviews;
export const selectCurrentAgency = (state: RootState) => state.journeys.agency;
export const selectCurrentDiscountJourneys = (state: RootState) =>
  state.journeys.discountJourneys;

export default Journeys;
