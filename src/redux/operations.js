import axios from 'axios';
import actions from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};

// eslint-disable-next-line
export default { fetchContacts, addContact, deleteContact };