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

const GetAgencyJourneys = (id: number) => api.get(`agencies/journeys/${id}`);

const GetAgency = (id: number) => api.get(`agencies/28`);

const GetAgencyReviews = (id: number) => api.get(`agencies/reviews/28`);

const JourneysApi = {
  GetJourneys,
  GetJourney,
  GetAgencyJourneys,
  GetAgencyReviews,
  GetAgency,
  GetDiscountJourneys
};

export default JourneysApi;
