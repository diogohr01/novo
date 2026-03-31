import axios from 'axios';

const baseURL =
  import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetchTestimonials() {
  const { data } = await api.get('/testimonials');
  return data;
}

export async function postTestimonial(payload) {
  const { data } = await api.post('/testimonials', payload);
  return data;
}
