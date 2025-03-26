/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import i18n from 'i18next';

const api = axios.create({
  baseURL: '/api/v1/',
});

api.interceptors.request.use(
  config => {
    const newConfig = { ...config };
    const token = localStorage.getItem('authToken');

    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    newConfig.headers['Accept-Language'] = i18n.language;

    return newConfig;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('refreshToken');

      try {
        const { data } = await axios.post(
          '/api/v1/account/refresh-token',
          {},
          {
            headers: {
              'Refresh-Token': refreshToken,
            },
          },
        );

        localStorage.setItem('authToken', data.access_token);
        localStorage.setItem('refreshToken', data.refresh_token);

        originalRequest.headers.Authorization = `Bearer ${data.access_token}`;

        return await api(originalRequest);
      } catch (err) {
        if (err.response?.status === 401 || err.response?.status === 500) {
          localStorage.removeItem('authToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/guest/signin';
        }
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
