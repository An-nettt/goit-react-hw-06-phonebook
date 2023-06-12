import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { contactsReducer } from './contacts/contactsReducer';
// import { filterReducer } from './filter/filterReducer';

import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
