import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      toast.error(`Something went wrong! ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name: contactData.name,
        number: contactData.number,
      });
      return response.data;
    } catch (e) {
      toast.error(`Something went wrong! ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      toast.error(`Something went wrong! ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactData.id}`, {
        name: contactData.name,
        number: contactData.number,
      });
      return response.data;
    } catch (e) {
      toast.error(`Something went wrong! ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
