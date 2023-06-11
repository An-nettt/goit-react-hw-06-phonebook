// import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
// import Filter from './Filter';
// import useLocalStorage from './hooks/useLocalStorage';

import { Wrapper, Title, ContactsTitle } from '../styled';
import { getContacts } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(getContacts);
  console.log(contacts);

  //   const auditContacts = contacts.filter(contact =>
  //     contact.name.includes(newContact.name)
  //   );

  //   if (auditContacts.length === 0) {
  //     setContacts(() => [newContact, ...contacts]);
  //   } else {
  //     alert(`${newContact.name} is already in contacts.`);
  //   }
  // };

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const filterContacts = getVisibleContacts();

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      <ContactList />
    </Wrapper>
  );
}

// onDeleteContact = { deleteContact };
// {
//   /* <ContactList contacts={filterContacts} />; */
// }

// onSubmit = { addToContacts };
