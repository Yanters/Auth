import axios from 'axios';
const API_KEY = 'AIzaSyAkItqYJNiQi7cw1D8LO-h0W1dopZUGfTs';

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);

  return response;
};

export const createUser = async (email, password) => {
  const response = await authenticate('signUp', email, password);
  return response;
};

export const loginUser = async (email, password) => {
  const response = await authenticate('signInWithPassword', email, password);
  return response;
};
