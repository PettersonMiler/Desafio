import { create } from 'apisauce';

const api = create({
  baseURL: 'http://dev.4all.com:3003/',
});

api.addResponseTransform((response) => {
  if (!response.ok) throw response;
});

export default api;
