import { createAsyncThunk } from '@reduxjs/toolkit';
import JourneysApi from './API';

const doGetJourneys = createAsyncThunk<any, any, any>(
  'journeys',
  async (_, { rejectWithValue }) => {
    try {
      const response = await JourneysApi.GetJourneys();

      if(response.status == 401)
      {
        throw response.data
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

const thunks = {
  doGetJourneys,
  doGetJourney,
  doGetAgencyJourneys,
};

export default thunks;
