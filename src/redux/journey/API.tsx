import axios from 'axios';
import { api } from 'redux/_axios';

const GetJourneys = () => api.get('journeys');
//   data: {
//   rating?: number;
//   category?: string;
//   location?: string;
//   page?: number;
//   start_date?: string;
//   search_key_word_name?: string;
//   search_arabic_key_word_name?: string;
//   price_start?: number;
//   price_end?: number;
//   discount?: boolean;
// }
// let params = '';

// if (data.rating) params += `?rating=${data.rating}`;
// if (data.category)
//   params += `${params.length === 0 ? '?' : '&'}category=${data.category}`;
// if (data.location)
//   params += `${params.length === 0 ? '?' : '&'}location=${data.location}`;
// if (data.start_date)
//   params += `${params.length === 0 ? '?' : '&'}start_date=${data.start_date}`;
// if (data.search_key_word_name)
//   params += `${params.length === 0 ? '?' : '&'}search_key_word_name=${
//     data.search_key_word_name
//   }`;
// if (data.search_arabic_key_word_name)
//   params += `${params.length === 0 ? '?' : '&'}search_arabic_key_word_name=${
//     data.search_arabic_key_word_name
//   }`;
// if (data.price_start)
//   params += `${params.length === 0 ? '?' : '&'}price_start=${
//     data.price_start
//   }`;
// if (data.price_end)
//   params += `${params.length === 0 ? '?' : '&'}price_end=${data.price_end}`;
// if (data.discount) {
//   console.log('ddd');
// }
// params =
//   params + `${params.length === 0 ? '?' : '&'}discount=${data.discount}`;
// if (data.page)
//   params += `${params.length === 0 ? '?' : '&'}page=${data.page}`;
// console.log(params, 'kkk');

const GetJourney = (id: number) => api.get(`journeys/${id}`);

const GetAgencyJourneys = (id: number) => api.get(`journeys/agency/${id}`);

const JourneysApi = {
  GetJourneys,
  GetJourney,
  GetAgencyJourneys,
};

export default JourneysApi;
