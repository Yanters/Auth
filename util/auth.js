import axios from 'axios';
const API_KEY = 'AIzaSyAkItqYJNiQi7cw1D8LO-h0W1dopZUGfTs';

export const createUser = async (email, password) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
};
