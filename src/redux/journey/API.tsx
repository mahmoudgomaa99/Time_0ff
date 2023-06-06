import axios from 'axios';
import { api } from 'redux/_axios';

const GetJourneys = (data: {
  category: string;
  location: string;
  start_date: string;
  rating: number;
  search_key_word_name: string;
  search_arabic_key_word_name: string;
  price_start: number;
  price_end: number;
  discount: boolean;
  page: number;
}) => {
  let params = '';
  if (data.category)
    params += `${params.length === 0 ? '?' : '&'}category=${data.category}`;
  if (data.location)
    params += `${params.length === 0 ? '?' : '&'}location=${data.location}`;
  if (data.start_date)
    params += `${params.length === 0 ? '?' : '&'}start_date=${data.start_date}`;
  if (data.search_key_word_name)
    params += `${params.length === 0 ? '?' : '&'}search_key_word_name=${
      data.search_key_word_name
    }`;
  if (data.search_arabic_key_word_name)
    params += `${params.length === 0 ? '?' : '&'}search_arabic_key_word_name=${
      data.search_arabic_key_word_name
    }`;
  if (data.price_start)
    params += `${params.length === 0 ? '?' : '&'}price_start=${
      data.price_start
    }`;
  if (data.price_end)
    params += `${params.length === 0 ? '?' : '&'}price_end=${data.price_end}`;
  if (data.discount)
    params =
      params + `${params.length === 0 ? '?' : '&'}discount=${data.discount}`;
  if (data.page)
    params += `${params.length === 0 ? '?' : '&'}page=${data.page}`;
  if (data.rating)
    params += `${params.length === 0 ? '?' : '&'}rating=${data.rating}`;
  console.log(params, 'from api');
  return api.get('journeys' + params);
};
const GetHotJourneys = (data: {
  category: string;
  location: string;
  start_date: string;
  rating: number;
  search_key_word_name: string;
  search_arabic_key_word_name: string;
  price_start: number;
  price_end: number;
  discount: boolean;
  page: number;
}) => {
  let params = '';
  if (data.category)
    params += `${params.length === 0 ? '?' : '&'}category=${data.category}`;
  if (data.location)
    params += `${params.length === 0 ? '?' : '&'}location=${data.location}`;
  if (data.start_date)
    params += `${params.length === 0 ? '?' : '&'}start_date=${data.start_date}`;
  if (data.search_key_word_name)
    params += `${params.length === 0 ? '?' : '&'}search_key_word_name=${
      data.search_key_word_name
    }`;
  if (data.search_arabic_key_word_name)
    params += `${params.length === 0 ? '?' : '&'}search_arabic_key_word_name=${
      data.search_arabic_key_word_name
    }`;
  if (data.price_start)
    params += `${params.length === 0 ? '?' : '&'}price_start=${
      data.price_start
    }`;
  if (data.price_end)
    params += `${params.length === 0 ? '?' : '&'}price_end=${data.price_end}`;
  if (data.discount)
    params =
      params + `${params.length === 0 ? '?' : '&'}discount=${data.discount}`;
  if (data.page)
    params += `${params.length === 0 ? '?' : '&'}page=${data.page}`;
  if (data.rating)
    params += `${params.length === 0 ? '?' : '&'}rating=${data.rating}`;
  console.log(params, 'from api');
  return api.get('journeys' + params);
};
const GetDiscountJourneys = (data: {
  category: string;
  location: string;
  start_date: string;
  rating: number;
  search_key_word_name: string;
  search_arabic_key_word_name: string;
  price_start: number;
  price_end: number;
  discount: boolean;
  page: number;
}) => {
  let params = '';
  if (data.category)
    params += `${params.length === 0 ? '?' : '&'}category=${data.category}`;
  if (data.location)
    params += `${params.length === 0 ? '?' : '&'}location=${data.location}`;
  if (data.start_date)
    params += `${params.length === 0 ? '?' : '&'}start_date=${data.start_date}`;
  if (data.search_key_word_name)
    params += `${params.length === 0 ? '?' : '&'}search_key_word_name=${
      data.search_key_word_name
    }`;
  if (data.search_arabic_key_word_name)
    params += `${params.length === 0 ? '?' : '&'}search_arabic_key_word_name=${
      data.search_arabic_key_word_name
    }`;
  if (data.price_start)
    params += `${params.length === 0 ? '?' : '&'}price_start=${
      data.price_start
    }`;
  if (data.price_end)
    params += `${params.length === 0 ? '?' : '&'}price_end=${data.price_end}`;
  if (data.discount)
    params =
      params + `${params.length === 0 ? '?' : '&'}discount=${data.discount}`;
  if (data.page)
    params += `${params.length === 0 ? '?' : '&'}page=${data.page}`;
  if (data.rating)
    params += `${params.length === 0 ? '?' : '&'}rating=${data.rating}`;
  console.log(params, 'from api');
  return api.get('journeys' + params);
};

const GetJourney = (id: number) => api.get(`journeys/${id}`);

const GetAgencyJourneys = (data: { id: number; page: number }) =>
  api.get(`agencies/journeys/${data.id}?page=${data.page}`);

const GetAgency = (id: number) => api.get(`agencies/${id}`);

const GetAgencyReviews = (data: { id: number; page: number }) =>
  api.get(`agencies/reviews/${data.id}?page=${data.page}`);
const AddFavourite = (id: number) => api.put(`journeys/favorite/${id}`);
const GetFavJourneys = () => api.get('users/journeys');
const AddJourney = (data: {
  journey_name: string;
  category: string;
  description: string;
  start_date: any;
  capacity: number;
  price: number;
  location: string;
  arabic_journey_name: string;
  arabic_description: string;
  arabic_location: string;
  arabic_category: string;
  availability: {
    date: any;
    details: {
      hour: string;
      capacity: number;
    }[];
  }[];
}) => api.post('journeys', data);
const UpdateJourney_Image = (data: any, id: any) =>
  api.put(`journeys/${id}/image`, data);
const GetJourneyAvailabilitey = (id: number) =>
  api.get(`journeys/availability/${id}`);
const GetJourneyAvailabilitey_Vendor = (id: number) =>
  api.get(`journeys/availability/vendor/${id}`);
const UpdateJourneyAvailabilitey = (data: {
  id: number;
  availability: {
    date: any;
    details: {
      id: number;
      hour: string;
      capacity: number;
    }[];
  }[];
}) => api.post(`journeys/availability/${data.id}`, data.availability);
const RemoveJourney = (id: number) => api.delete(`journeys/${id}`);

const AddBooking = (data: { journey_slot_id: any; number_of_seats: any }) =>
  api.post(`journeys/book`, data);

const GetBooking = (id: number) => api.get(`journeys/book/${id}`);

const GetAllBookings = (data: { id: number; page: number }) =>
  api.get(`journeys/book/user/${data.id}?page=${data.page}`);
const UpdateJourneyData = (data: any) =>
  api.put(`journeys/${data.id}`, data.data);

const GetAgencyNotification = (data: { id: number; page: number }) =>
  api.get(`agencies/notification/${data.id}?page=${data.page}`);

const ConfirmBooking = (id: number) => api.put(`journeys/book/${id}`);
const CancelBooking = (id: number) => api.post(`journeys/book/${id}`);

const JourneysApi = {
  GetJourneys,
  GetJourney,
  GetAgencyJourneys,
  GetAgencyReviews,
  GetAgency,
  GetDiscountJourneys,
  GetHotJourneys,
  AddFavourite,
  GetFavJourneys,
  AddJourney,
  UpdateJourney_Image,
  GetJourneyAvailabilitey,
  UpdateJourneyAvailabilitey,
  RemoveJourney,
  AddBooking,
  GetBooking,
  GetAllBookings,
  GetJourneyAvailabilitey_Vendor,
  UpdateJourneyData,
  GetAgencyNotification,
  ConfirmBooking,
  CancelBooking
};

export default JourneysApi;
