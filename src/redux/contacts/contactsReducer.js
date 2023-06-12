// import { createReducer } from '@reduxjs/toolkit';
// import { contactsInitialState } from './contactsInitialState';
// import { addToContacts, deleteContact } from 'redux/actions';

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addToContacts]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// });

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case addToContacts.type:
//       return [...state.contacts, action.payload];

//     case deleteContact.type:
//       return state.contacts.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case 'contacts/deleteContact':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };

//     default:
//       return state;
//   }
// };
