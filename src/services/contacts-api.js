import axios from 'axios';
const BASE_URL = 'https://connections-api.herokuapp.com/';

async function fetchContacts() {
  const { data } = await axios.get(`${BASE_URL}//contacts`);
  return data;
}
