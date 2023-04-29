export const initialVslues: TInitialValues = {
  category: '',
  start_date: '',
  location: '',
  price_start: 10,
  price_end: 1000,
  rating: '',
  search_key_word_name: '',
};

export interface TInitialValues {
  category: string;
  start_date: string;
  location: string;
  price_start: number;
  price_end: number;
  rating: string;
  search_key_word_name?: string;
}
