import { createSlice } from '@reduxjs/toolkit';
import { EntityKeys } from 'redux/schema';
import thunks from './thunks';
import { RootState } from 'redux/store';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Tagency, Tjourneys } from './model';
import { data } from '../../screens/App/Settings/Components/Card/data';
import languages from 'values/languages';
import { selectLanguage } from 'redux/language';
import { useSelector } from 'react-redux';

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
  getBooking: any;
  allBookings: any;
  currentIdBook: any;
  journey_availabilitey_vendor: {
    date: any;
    details: {
      _id: number;
      hour: string;
      capacity: number;
      numberOfBookings: number;
    }[];
  }[];
  agencyNotification: any;
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
  getBooking: null,
  allBookings: null,
  currentIdBook: null,
  journey_availabilitey_vendor: [],
  agencyNotification: null,
};

const slice = createSlice({
  name: EntityKeys.JOURNEYS,
  initialState: initialValues,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(thunks.doGetJourneys.fulfilled, (state, action) => {
      console.log(action.meta.arg, 'test test');
      if (action.meta.arg.page === 1) {
        state.journeys = action.payload.data.data;
      } else {
        state.journeys = [...state.journeys, ...action.payload.data.data];
      }
    });
    builder.addCase(thunks.doGetJourneys.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doGetHotJourneys.fulfilled, (state, action) => {
      console.log(action.meta.arg);
      if (action.meta.arg.page === 1) {
        state.hotJourneys = action.payload.data.data;
      } else {
        state.hotJourneys = [...state.hotJourneys, ...action.payload.data.data];
      }
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
      if (action.meta.arg.page === 1) {
        state.agencyJorneys = action.payload.data.data;
      } else {
        state.agencyJorneys = [
          ...state.agencyJorneys,
          ...action.payload.data.data,
        ];
      }
    });
    builder.addCase(thunks.doGetAgencyJourneys.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(thunks.doGetAgencyReviews.fulfilled, (state, action) => {
      if (action.meta.arg.page === 1) {
        state.agencyReviews = action.payload.data.data;
      } else {
        state.agencyReviews = [
          ...state.agencyReviews,
          ...action.payload.data.data,
        ];
      }
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
      thunks.doGetJourneysAvilabilitey_Vendor.fulfilled,
      (state, action) => {
        console.log(action.payload.data);
        state.journey_availabilitey_vendor = action.payload.data.data;
      },
    );
    builder.addCase(
      thunks.doGetJourneysAvilabilitey_Vendor.rejected,
      (state, action) => {
        console.log(action.payload);
      },
    );
    builder.addCase(
      thunks.doUpdateJourneyAvailabilitey.fulfilled,
      (state, action) => {
        console.log(action.payload.data);
        Toast.show({
          type: 'success',
          text2: action.payload.data.data.message,
        });
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
    builder.addCase(thunks.doAddBooking.fulfilled, (state, action) => {
      state.currentIdBook = action.payload.data._id;
      // console.log(action.payload.data);
    });
    builder.addCase(thunks.doAddBooking.rejected, (state, action: any) => {
      // console.log(action, 'from faild');
    });

    builder.addCase(thunks.doGetBooking.fulfilled, (state, action) => {
      console.log(action.payload, 'kk');
      state.getBooking = action.payload.data;
    });
    builder.addCase(thunks.doGetBooking.rejected, (state, action) => {
      console.log(action.payload, 'll');
    });
    builder.addCase(thunks.doGetAllBookings.fulfilled, (state, action) => {
      console.log(action.payload.data.data.bookings);
      if (action.meta.arg.page === 1) {
        state.allBookings = action.payload.data.data.bookings;
      } else {
        state.allBookings = [
          ...state.allBookings,
          ...action.payload.data.data.bookings,
        ];
      }
    });
    builder.addCase(thunks.doGetAllBookings.rejected, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(thunks.doUpdateJourneyData.fulfilled, (state, action) => {
      console.log(action.payload.data.data);
    });
    builder.addCase(thunks.doUpdateJourneyData.rejected, (state, action) => {
      console.log(action);
    });

    builder.addCase(
      thunks.doGetAgencyNotification.fulfilled,
      (state, action) => {
        console.log(action, ' from index');

        if (action.meta.arg.page === 1) {
          state.agencyNotification =
            action.payload.data.data.reversedNotifications;
        } else {
          state.agencyReviews = [
            ...state.agencyNotification,
            ...action.payload.data.data.reversedNotifications,
          ];
        }
      },
    );
    builder.addCase(
      thunks.doGetAgencyNotification.rejected,
      (state, action) => {
        console.log(action);
      },
    );

    builder.addCase(thunks.doConfirmBooking.fulfilled, (state, action) => {
      // console.log(action);
      Toast.show({
        type: 'success',
        text2: action.payload.data.message,
      });
    });
    builder.addCase(thunks.doConfirmBooking.rejected, (state, action) => {
      // console.log(action);
    });
    builder.addCase(thunks.doCancelBooking.fulfilled, (state, action) => {
      // console.log(action);
      Toast.show({
        type: 'success',
        text2: action.payload.data.message,
      });
    });
    builder.addCase(thunks.doCancelBooking.rejected, (state, action) => {
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
export const selectCurrentBooking = (state: RootState) =>
  state.journeys.getBooking;
export const selectCurrentAllBookings = (state: RootState) =>
  state.journeys.allBookings;
export const selectCurrentIdBook = (state: RootState) =>
  state.journeys.currentIdBook;
export const selectCurrentJourneysAvilabilitey_Vendor = (state: RootState) =>
  state.journeys.journey_availabilitey_vendor;
export const selectCurrentAgencyNotification = (state: RootState) =>
  state.journeys.agencyNotification;

export default Journeys;
