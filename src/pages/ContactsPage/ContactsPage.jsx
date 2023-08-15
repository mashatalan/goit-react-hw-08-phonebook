import { Badge, Box, Typography } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import {
  selectIsLoading,
  selectContacts,
} from 'redux/contacts/contactsSelectors';
import PeopleIcon from '@mui/icons-material/People';

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        pt: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: '#008080',
          textAlign: 'center',

        }}
      >
        Phonebook
      </Typography>
      <ContactForm />
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 600,
          display: 'flex',
          gap: '15px',
          alignItems: 'center',
          color: '#008080',
        }}
      >
        Contacts{' '}
        <Badge
          color="primary"
          size="large"
          badgeContent={contacts.length}
        >
          <PeopleIcon
            sx={{
              marginRight: '8px',
            }}
          />
        </Badge>
      </Typography>

      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </Box>
  );
}

export default ContactsPage;
