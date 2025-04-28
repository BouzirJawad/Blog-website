import axios from 'axios';
import { BASE_URL } from '../config/config';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

export const loginUser = (email, password) => {
  return from(axios.get(`${BASE_URL}/users?email=${email}&password=${password}`)).pipe(
    map(res => res.data)
  );
};

export const registerUser = (userData) => {
  return from(axios.post(`${BASE_URL}/users`, userData)).pipe(
    map(res => res.data)
  );
};
