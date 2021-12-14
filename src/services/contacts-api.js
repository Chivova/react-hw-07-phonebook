import axios from 'axios';
const BASE_URL = 'https://connections-api.herokuapp.com/contacts';

async function fetchContacts() {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
}

async function postContact(name, number) {
  const { data } = await axios.post(`${BASE_URL}`, { name, number });
  console.log(data);
  return data;
}

export { fetchContacts, postContact };
