// import { useState } from 'react';
import { useSelector } from 'react-redux';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { Wrapper, Title, ContactsTitle } from '../styled';
import { getContacts } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(getContacts);
  console.log(contacts);

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
}

// {
//   /* <ContactList contacts={filterContacts} />; */
// }
