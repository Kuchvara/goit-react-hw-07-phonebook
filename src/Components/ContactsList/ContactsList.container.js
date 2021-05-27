import { connect } from 'react-redux';
import operations from "../../redux/operations";
import selectors from '../../redux/selectors';
import ContactsList from './ContactsList';

const mapStateToProps = state => ({
  contacts: selectors.getfilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);