import { connect } from 'react-redux';
import actions from '../../redux/actions';
import selectors from '../../redux/selectors';
import Filter from './Filter';

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

const mapStateToProps = state => ({
  value: selectors.getFilter(state),
});

const mapDispatchToProps = distatch => ({
  handleChange: (event) =>
    distatch(actions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);