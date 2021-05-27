import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess');
export const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const changeFilter = createAction('contacts/change-filter');

// eslint-disable-next-line
export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  addContactRequest,
  addContactSuccess,
  addContactError,

  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,

  changeFilter,
};