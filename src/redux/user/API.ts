import { api } from 'redux/_axios';

const LogIn = (data: { email: string; password: string }) =>
  api.post('login', data);
const SignUp = (data: {
  name: string;
  phone: string;
  email: string;
  password: string;
  type: string;
  nationality: string;
  country: string;
}) => api.post('signup', data);
const ForgetPassword = (email: string) => api.post('forgot', email);
const ResetPassword = (password: string) => api.post('reset', password);
const GetUser = () => api.get(`users/me`);
const UpdateUser = (data: {
  name?: string;
  email?: string;
  nationality?: string;
  phone?: string;
  country?: string;
}) => api.put('users/me', data);
const AddAgency = (data: {
  name: string;
  phone: string;
  email: string;
  password: string;
  city: string;
  description: string;
  arabic_description: string;
}) => api.post('agencies', data);
const UpdateMyImage = (data: any) => api.put('users/me/image', data);
const GetUserNotefications = (data: { id: number; page: number }) =>
  api.get(`users/notifications/${data.id}?page=${data.page}`);

const getCategories = () => api.get('categories');
const getAds = () => api.get('ads');

const getCards = (data: any) => api.get(`payment/getCards/${data}`);

const deleteCard = (data: any) =>
  api.delete(
    `payment/deleteCard?cardToken=${data.cardToken}&userId=${data.userId}`,
  );

const getLocations = () => api.get('locations');

const UserAPI = {
  LogIn,
  SignUp,
  ResetPassword,
  ForgetPassword,
  GetUser,
  UpdateUser,
  AddAgency,
  UpdateMyImage,
  GetUserNotefications,
  getCategories,
  getAds,
  getCards,
  deleteCard,
  getLocations,
};

export default UserAPI;
