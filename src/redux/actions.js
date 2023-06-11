import { nanoid } from 'nanoid';

export const addToContacts = (name, number) => {
  console.log(name, number);
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};

export const changeFilter = value => {
  return {
    type: 'filters/changeFilter',
    payload: value,
  };
};
