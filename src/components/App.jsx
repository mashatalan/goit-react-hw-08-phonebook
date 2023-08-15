import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import Loader from './Loader';
import 'react-toastify/dist/ReactToastify.css';

import { selectError, selectIsLoading } from '../redux/selectors';
import { Container } from './App.styled';
import Phonebook from './Phonebook';
import ContactList from './ContactList';
import Filter from './Filter';


function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </Container>
  );
}

export default App;
