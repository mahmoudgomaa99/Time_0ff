import { createSlice } from '@reduxjs/toolkit';
import { EntityKeys } from 'redux/schema';
import thunks from './thunks';
import { RootState } from 'redux/store';

type TInitialValues = {
  journeys?: any;
};

const initialValues: TInitialValues = {
  journeys: null,
};

const slice = createSlice({
  name: EntityKeys.JOURNEYS,
  initialState: initialValues,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(thunks.doGetJourneys.fulfilled, (state, action) => {
      // console.log(action.payload.data.data,'test')
      state.journeys = action.payload.data.data
    });
    builder.addCase(thunks.doGetJourneys.rejected, (state, action) => {
      // console.log(action)
    });
    builder.addCase(thunks.doGetJourney.fulfilled, (state, action) => {
      // console.log('from journey fullfild',action)
      state.journeys = action.payload.data.data
    });
    builder.addCase(thunks.doGetJourney.rejected, (state, action) => {
      // console.log(action)
    });
    builder.addCase(
      thunks.doGetAgencyJourneys.fulfilled,
      (state, action) => {
        console.log(action)
      },
    );
    builder.addCase(thunks.doGetAgencyJourneys.rejected, (state, action) => {
      // console.log(action)
    });
  },
});

const Journeys = {
  thunks,
  slice,
};

export const selectCurrentJourneys = (state: RootState) => state.journeys.journeys;
export const selectCurrentJourney = (state: RootState) => state.journeys.journeys;
export const selectCurrentAgencyJourneys = (state: RootState) => state.journeys.journeys;

export default Journeys;
