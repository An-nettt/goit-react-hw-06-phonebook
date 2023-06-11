import { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import useLocalStorage from './hooks/useLocalStorage';

import { Wrapper, Title, ContactsTitle } from '../styled';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contactsList', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addToContacts = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const auditContacts = contacts.filter(contact =>
      contact.name.includes(newContact.name)
    );

    if (auditContacts.length === 0) {
      setContacts(() => [newContact, ...contacts]);
    } else {
      alert(`${newContact.name} is already in contacts.`);
    }
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(() => contacts.filter(contact => contact.id !== id));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getVisibleContacts();

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addToContacts} />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />
    </Wrapper>
  );
}
