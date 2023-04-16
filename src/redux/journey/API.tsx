import { api } from 'redux/_axios';

const GetJourneys = () => api.get('journeys');

const GetJourney = (id: number) => api.get(`journeys/${id}`);

const GetAgencyJourneys = (id: number) => api.get(`journeys/agency/${id}`);

const JourneysApi = {
  GetJourneys,
  GetJourney,
  GetAgencyJourneys,
};

export default JourneysApi;
