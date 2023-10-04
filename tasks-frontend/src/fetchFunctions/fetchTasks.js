import axios from 'axios';

const ENDPOINT = 'http://localhost:8080/api/tasks/';

export const fetchTasks = async () => {
  try {
    const response = await axios.get(ENDPOINT);
    return response.data;
  } catch (error) {
    console.error('Error getting data from API', error);
    throw error;
  }
};
