import api from '../../shared/helpers/axiosConfig';

export const getCategories = () => {
  return api.get('/chat/categories');
};

export const getTopics = (categoryId) => {
  return api.get(`/chat/${categoryId}/topics`);
};

export const getTopicHistory = (topicId) => {
  return api.get(`/chat/topic/${topicId}`);
};

export const postSendMessage = (requestBody) => {
  return api.post(`/chat/send`, requestBody)
};

export const postAddTopic = (requestBody) => {
  return api.post('/chat/topic', requestBody);
};

export const deleteTopic = (topicId) => {
  return api.delete(`/chat/topic/${topicId}`);
}