import styles from "./Form.module.css";
import React, { Component } from "react";
import { connect } from 'react-redux';
// import actions from '../../redux/actions';
import operations from '../../redux/operations'

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(operations.addContact(name, number)),
});

class Form extends Component {
  state = {
  name: '',
  number: ''
  }
  
  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  };
  
  handlerSubmit = event => {
    event.preventDefault();

    const { contacts } = this.props;    
    const data = this.state;
    const normalizedName = data.name.toLowerCase();

    const duplicatedName = contacts.find(contact => contact.name.toLowerCase() === normalizedName);
    const message = `${data.name} is already in contacts`;

    if (!!duplicatedName) {
      alert(message)   
    } else {
      this.props.onSubmit(data.name, data.number);
    }    

    this.reset();   
  };

  reset = () => {
    this.setState({ name: '', number: '' })
  };

  render() {
  return ( <form className={styles.form} onSubmit={this.handlerSubmit}>
      <label className={styles.form_item}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          autoComplete="off" /> Name
      </label>
      <label className={styles.form_item}>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          autoComplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required /> Number
      </label>
      <button type="submit">Add contact</button>
    </form>
  )}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);