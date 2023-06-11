// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/actions';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { Wrapper, Title, ContactsTitle } from '../styled';

export default function App() {
  const contacts = useSelector(getContacts);
  const filterContact = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = event => dispatch(changeFilter(event.target.value));

  const getVisibleContacts = () => {
    const normalizedFilter = String(filterContact).toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getVisibleContacts();

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter onChange={onChangeFilter} />
      <ContactList contacts={filterContacts} />
    </Wrapper>
  );
}
