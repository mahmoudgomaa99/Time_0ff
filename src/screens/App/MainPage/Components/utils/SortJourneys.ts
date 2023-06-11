import { Tjourneys } from 'redux/journey/model';

export const SortJourneys = (journeys?: Tjourneys, sort?: number) => {
  if (!sort) {
    return journeys;
  } else {
    if (sort === 0) {
      return journeys?.slice().sort((a, b) => (a.price < b.price ? 1 : -1));
    } else if (sort === 1) {
      return journeys?.slice().sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (sort === 2) {
      return journeys?.slice().sort((a, b) => (a.rating < b.rating ? 1 : -1));
    }
  }
};
