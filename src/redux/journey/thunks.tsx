import { createAsyncThunk } from '@reduxjs/toolkit';
import JourneysApi from './API';

const doGetJourneys = createAsyncThunk<any, any, any>(
  'journeys',
  async (data, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.GetJourneys(data);

      if (response.status == 401) {
        throw response.data;
      }
      return { data: response };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doGetHotJourneys = createAsyncThunk<any, any, any>(
  'journeys/hot',
  async (data, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.GetHotJourneys(data);

      if (response.status == 401) {
        throw response.data;
      }
      return { data: response };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doGetDiscountJourneys = createAsyncThunk<any, any, any>(
  'discountJourneys',
  async (data, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.GetDiscountJourneys(data);

      if (response.status == 401) {
        throw response.data;
      }
      return { data: response };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doGetJourney = createAsyncThunk<any, any, any>(
  'journeys/GetJourney',
  async (data, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.GetJourney(data);
      return { data: response };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const doGetAgencyJourneys = createAsyncThunk<any, any, any>(
  'journeys/agency/GetAgency',
  async (data, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.GetAgencyJourneys(data);
      return { data: response };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const doGetAgencyReviews = createAsyncThunk<any, any, any>(
  'journeys/agency/GetAgencyReviews',
  async (data, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.GetAgencyReviews(data);
      return { data: response };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const doGetAgency = createAsyncThunk<any, any, any>(
  'journeys/GetAgency',
  async (data, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.GetAgency(data);
      return { data: response };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doAddFavourite = createAsyncThunk<any, any, any>(
  'journeys/AddFavourite',
  async (data, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.AddFavourite(data);
      return { data: response };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doGetFavJourneys = createAsyncThunk<any, any, any>(
  'journeys/favourites',
  async (_, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.GetFavJourneys();
      return { data: response };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doAddJourney = createAsyncThunk<any, any, any>(
  'journeys/addJourney',
  async (data, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.AddJourney(data);
      if (response.status === 400 || response.status === 401) {
        throw response.data;
      } else {
        return { data: response };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doUpdatJourney_Image = createAsyncThunk<any, any, any>(
  'journeys/updateJourneyImage',
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.UpdateJourney_Image(data, id);
      // if (response.status === 400) {
      //   throw response.data;
      // } else {
      return { data: response };
      // }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doGetJourneysAvilabilitey = createAsyncThunk<any, any, any>(
  'journeys/GetJourneysAvilabilitey',
  async (data, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.GetJourneyAvailabilitey(data);
      return { data: response };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doUpdateJourneyAvailabilitey = createAsyncThunk<any, any, any>(
  'journeys/UpdateJourneyAvailabilitey',
  async (data, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.UpdateJourneyAvailabilitey(data);
      return { data: response };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const doRemoveJourneys = createAsyncThunk<any, any, any>(
  'journeys/RemoveJourneys',
  async (data, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.RemoveJourney(data);
      if (response.status === 500) {
        throw response.data;
      }
      return { data: response.data };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const thunks = {
  doGetJourneys,
  doGetJourney,
  doGetAgencyJourneys,
  doGetAgencyReviews,
  doGetAgency,
  doGetDiscountJourneys,
  doGetHotJourneys,
  doAddFavourite,
  doGetFavJourneys,
  doAddJourney,
  doUpdatJourney_Image,
  doGetJourneysAvilabilitey,
  doUpdateJourneyAvailabilitey,
  doRemoveJourneys,
};

export default thunks;
