import { api } from 'redux/_axios';

const LogIn = (data: { email: string; password: string }) =>
  api.post('login', data);
const SignUp = (data: {
  name: string;
  phone: string;
  email: string;
  password: string;
  type: string;
  city: string;
  country: string;
}) => api.post('signup', data);
const ForgetPassword = (email: string) => api.post('forgot', email);
const ResetPassword = (password: string) => api.post('reset', password);
const GetUser = () => api.get(`users/me`);
const UpdateUser = (data: {
  name?: string;
  email?: string;
  city?: string;
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
};

export default UserAPI;
