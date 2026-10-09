import axios from 'axios';

const API_BASE = '/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Petitions / Invitations
export const submitPetition = async (data) => {
  const response = await api.post('/invitations', data);
  return response.data;
};

export const fetchPetitions = async (params = {}) => {
  const response = await api.get('/invitations', { params });
  return response.data;
};

export const updatePetition = async (id, data) => {
  const response = await api.patch(`/invitations/${id}`, data);
  return response.data;
};

export const fetchStats = async () => {
  const response = await api.get('/invitations/stats');
  return response.data;
};

// Institutional Partners
export const submitPartnerInquiry = async (data) => {
  const response = await api.post('/partners', data);
  return response.data;
};

export const fetchPartners = async () => {
  const response = await api.get('/partners');
  return response.data;
};

// Salons / Itineraries
export const fetchSalons = async () => {
  const response = await api.get('/salons');
  return response.data;
};

export default api;
