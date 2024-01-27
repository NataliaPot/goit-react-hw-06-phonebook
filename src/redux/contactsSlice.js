import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filteredContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact, filteredContact } =
  contactsSlice.actions;
