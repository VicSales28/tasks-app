// Data fetching using JavaScript Fetch API
const fetchTasks = async () => {
  try {
    const endpoint = 'http://localhost:8080/api/tasks/';
    const promise = await fetch(endpoint);
    const response = await promise.json();
    return response;
  } catch (error) {
    console.log('API request error: ', error.message);
    throw error;
  }
};

export default fetchTasks;
