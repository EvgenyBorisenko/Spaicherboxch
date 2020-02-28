import axios from 'axios';

const BASE_URL = 'https://0423aa0e-2674-4f94-b77d-b3c2f7bea508.mock.pstmn.io';

const VERSION = 'v1';

export const getProfile = () => {
  return axios.get(`${BASE_URL}/api/${VERSION}/profile`);
};

export const createNewOrder = data => {
  return axios
    .post(`${BASE_URL}/api/${VERSION}/packages`, data)
    .then(response => response.data)
    .catch(error => error);
};

export const authUser = data => {
  return axios
    .post(`${BASE_URL}/api/${VERSION}/authorization`, data)
    .then(response => response.data)
    .catch(error => error);
};
