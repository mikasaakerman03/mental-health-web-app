import api from "../helpers/axiosConfig";

export const getUser = () => {
  return api.get('/chat/user');
}