export const initialVslues: TInitialValues = {
  category: '',
  start_date: '',
  location: '',
  price_start: 0,
  price_end: 100000,
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
