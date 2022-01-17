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
  return id;
}
async function fetchGetIdContact(id) {
  await axios.get(`${BASE_URL}`);
  return id;
}

async function fetchUpdateContact(id, contact) {
  const { data } = await axios.patch(`${BASE_URL}/${id}`, contact);
  return data;
}
export {
  fetchContacts,
  postContact,
  deleteContactRequest,
  fetchGetIdContact,
  fetchUpdateContact,
};
