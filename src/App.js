import { useEffect } from "react";
import { connect } from "react-redux";

import Form from "./Components/Form/Form";
import ContactsList from "./Components/ContactsList/ContactsList.container";
import Filter from "./Components/Filter/Filter.container";

import operations from './redux/operations';
import selectors from './redux/selectors';



const App = ({ isLoadingContacts, fetchContactsOnMount }) => {

  useEffect(() => {
    fetchContactsOnMount();
  }, [fetchContactsOnMount]);

  return (
  <>
    <h1>Phonebook</h1>
    <Form />
    <h2>Contacts</h2>
    <Filter />
    <ContactsList />
    {isLoadingContacts && 'Loading...'}
  </>)
};

const mapStateToProps = state => ({
  isLoadingContacts: selectors.getLoading(state),
  isError: selectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContactsOnMount: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);