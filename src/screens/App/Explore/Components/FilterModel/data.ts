export const initialVslues: TInitialValues = {
  category: '',
  date: '',
  city: '',
  startPrice: 10,
  endPrice: 1000,
  rating: '',
};

export interface TInitialValues {
  category: string;
  date: string;
  city: string;
  startPrice: number;
  endPrice: number;
  rating: string;
}
