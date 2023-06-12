// import { createReducer } from '@reduxjs/toolkit';
// import { filterInitialState } from './filterInitialState';
// import { changeFilter } from 'redux/actions';

// export const filterReducer = createReducer(filterInitialState, {
//   [changeFilter]: (state, action) => {
//     return action.payload;
//   },
// });

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case changeFilter.type:
//       ;

//     default:
//       return state;
//   }
// };

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case 'filter/changeFilter':
//       return {
//         ...state,
//         filter: [action.payload],
//       };
//     default:
//       return state;
//   }
// };
