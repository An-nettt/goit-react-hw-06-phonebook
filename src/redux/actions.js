export const addToContacts = ({ id, name, number }) => {
  console.log(id, name, number);
  return {
    type: 'contacts/addContact',
    payload: {
      id,
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
    type: 'filter/changeFilter',
    payload: value,
  };
};
