import axios from 'axios';

export const fetchUsers = async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/users/");
  return response.data;
};