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

// const deleteContact = {
//   type: 'contacts/deleteContact',
//   payload: 'id',
// };
