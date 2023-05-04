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
  country:string
}) => api.post('signup', data);
const ForgetPassword = (email: string) => api.post('forgot', email);
const ResetPassword = (password: string) => api.post('reset', password);
const GetUser = (id: number) => api.get(`users/${id}`);
const UpdateUser = (data: {
  name?: string;
  email?: string;
  city?: string;
  phone?: string;
  country?:string
}) => api.put('users/me', data);
const UserAPI = {
  LogIn,
  SignUp,
  ResetPassword,
  ForgetPassword,
  GetUser,
  UpdateUser,
};

export default UserAPI;
