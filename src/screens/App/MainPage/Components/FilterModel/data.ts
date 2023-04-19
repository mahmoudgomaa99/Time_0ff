export const initialVslues: TInitialValues = {
  category: '',
  start_date: '',
  location: '',
  price_start: 10,
  price_end: 1000,
  rating: '',
};

export interface TInitialValues {
  category: string;
  start_date: string;
  location: string;
  price_start: number;
  price_end: number;
  rating: string;
}
