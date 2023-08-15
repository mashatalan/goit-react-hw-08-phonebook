import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [editContact.pending]: handlePending,

    [fetchContacts.fulfilled](state, action) {
      handleFulfilled(state);
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      handleFulfilled(state);
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      handleFulfilled(state);
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id,
      );
      state.items.splice(index, 1);
    },
    [editContact.fulfilled](state, action) {
      handleFulfilled(state);
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id,
      );
      state.items.splice(index, 1, action.payload);
    },

    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [editContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
