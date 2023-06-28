import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import style from 'components/ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberImputId = nanoid();

  hundleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  hundleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state, this.nameInputId);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={style.contactForm} onSubmit={this.hundleSubmit}>
        <h1 className={style.contactFormHeader}>Phonebook</h1>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            className={style.contactInput}
            type="text"
            name="name"
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.hundleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.numberImputId}>
          Number
          <input
            className={style.contactInput}
            type="tel"
            name="number"
            id={this.numberInputId}
            value={this.state.number}
            onChange={this.hundleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={style.contactButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
