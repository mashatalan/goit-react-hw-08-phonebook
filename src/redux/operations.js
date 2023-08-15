import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';


axios.defaults.baseURL = 'https://64cea8880c01d81da3ef0121.mockapi.io/api/v1/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error(`Something went wrong! ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name: contactData.name,
        phonenumber: contactData.phonenumbe,
      });
      return response.data;
    } catch (error) {
      toast.error(`Something went wrong! ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      toast.error(`Something went wrong! ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.put(`/contacts/${contactData.id}`, {
        name: contactData.name,
        phonenumber: contactData.phonenumber,
      });
      return response.data;

    } catch (error) {
      toast.error(`Something went wrong! ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
