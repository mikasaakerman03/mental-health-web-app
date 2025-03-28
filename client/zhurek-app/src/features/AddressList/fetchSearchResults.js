import axios from 'axios';

export const fetchSearchResults = async (query) => {
  try {
    const response = await axios.get(
      `https://open.post.kz/npi/api/postcode/search`,
      {
        params: {
          query,
        },
      },
    );
    if (response.data && Array.isArray(response.data.data)) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    // console.error('Error fetching search results:', error);
    return [];
  }
};
