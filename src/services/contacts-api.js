import axios from 'axios';
const BASE_URL = 'https://connections-api.herokuapp.com/contacts';

async function fetchContacts() {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
}

async function postContact(name, number) {
  const { data } = await axios.post(`${BASE_URL}`, { name, number });
  return data;
}

async function deleteContactRequest(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  // console.log(id); +
  return id;
}

export { fetchContacts, postContact, deleteContactRequest };
