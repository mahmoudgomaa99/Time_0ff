import { createSlice } from '@reduxjs/toolkit';
import { EntityKeys } from 'redux/schema';
import thunks from './thunks';
import { RootState } from 'redux/store';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Tagency, Tjourneys } from './model';
import { data } from '../../screens/App/Settings/Components/Card/data';

type TInitialValues = {
  journeys: Tjourneys;
  journey?: any;
  agencyJorneys?: any;
  agencyReviews?: any;
  agency?: Tagency;
  discountJourneys: Tjourneys;
  hotJourneys: Tjourneys;
  favJourneys: Tjourneys;
  journey_availabilitey: {
    _id: number;
    available_date: string;
    hour: string;
    capacity: number;
  }[];
};

const initialValues: TInitialValues = {
  journeys: [],
  journey: null,
  agencyJorneys: null,
  agencyReviews: null,
  agency: undefined,
  discountJourneys: [],
  hotJourneys: [],
  favJourneys: [],
  journey_availabilitey: [],
};

const slice = createSlice({
  name: EntityKeys.JOURNEYS,
  initialState: initialValues,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(thunks.doGetJourneys.fulfilled, (state, action) => {
      console.log(action.meta.arg);

      state.journeys = action.payload.data.data;
    });
    builder.addCase(thunks.doGetJourneys.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doGetHotJourneys.fulfilled, (state, action) => {
      console.log(action.meta.arg);

      state.hotJourneys = action.payload.data.data;
    });
    builder.addCase(thunks.doGetHotJourneys.rejected, (state, action) => {
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
    builder.addCase(thunks.doAddFavourite.fulfilled, (state, action) => {
      console.log(action.payload.data.data);
      Toast.show({
        type: 'success',
        text2: action.payload.data.data.message,
      });
    });
    builder.addCase(thunks.doAddFavourite.rejected, (state, action) => {
      console.log(action);
    });

    builder.addCase(thunks.doGetFavJourneys.fulfilled, (state, action) => {
      console.log(action.payload);
      state.favJourneys = action.payload.data.data;
    });
    builder.addCase(thunks.doGetFavJourneys.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doAddJourney.fulfilled, (state, action) => {
      console.log(action.payload.data.data);
    });
    builder.addCase(thunks.doAddJourney.rejected, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(thunks.doUpdatJourney_Image.fulfilled, (state, action) => {
      // console.log(action.payload.data, 'kkkk');
    });
    builder.addCase(
      thunks.doUpdatJourney_Image.rejected,
      (state, action: any) => {
        // console.log(action.payload.data, 'lll');
      },
    );
    builder.addCase(
      thunks.doGetJourneysAvilabilitey.fulfilled,
      (state, action) => {
        // console.log(action.payload.data.data);
        state.journey_availabilitey = action.payload.data.data;
      },
    );
    builder.addCase(
      thunks.doGetJourneysAvilabilitey.rejected,
      (state, action) => {
        console.log(action.payload);
      },
    );
    builder.addCase(
      thunks.doUpdateJourneyAvailabilitey.fulfilled,
      (state, action) => {
        console.log(action.payload.data);
      },
    );

    builder.addCase(
      thunks.doUpdateJourneyAvailabilitey.rejected,
      (state, action) => {
        console.log(action.payload);
      },
    );
    builder.addCase(thunks.doRemoveJourneys.fulfilled, (state, action) => {
      console.log(action.payload.data);
      Toast.show({
        type: 'success',
        text2: action.payload.data.data.message,
      });
    });
    builder.addCase(thunks.doRemoveJourneys.rejected, (state, action: any) => {
      console.log(action);
      Toast.show({
        type: 'error',
        text2: action.payload.message,
      });
    });
  },
});

const Journeys = {
  thunks,
  slice,
};

export const selectCurrentJourneys = (state: RootState) =>
  state.journeys.journeys;
export const selectFavJourneys = (state: RootState) =>
  state.journeys.favJourneys;
export const selectHotJourneys = (state: RootState) =>
  state.journeys.hotJourneys;
export const selectCurrentJourney = (state: RootState) =>
  state.journeys.journey;
export const selectCurrentAgencyJourneys = (state: RootState) =>
  state.journeys.agencyJorneys;
export const selectCurrentAgencyReviews = (state: RootState) =>
  state.journeys.agencyReviews;
export const selectCurrentAgency = (state: RootState) => state.journeys.agency;
export const selectCurrentDiscountJourneys = (state: RootState) =>
  state.journeys.discountJourneys;
export const selectCurrentJourneysAvilabilitey = (state: RootState) =>
  state.journeys.journey_availabilitey;

export default Journeys;
