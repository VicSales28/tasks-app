import tasksMock from './tasks.mock';

// It simulates a request to a server
const fetchTasksMock = () => Promise.resolve({
  status: 200,
  ok: true,
  json: () => Promise.resolve(tasksMock),
});


export default fetchTasksMock;