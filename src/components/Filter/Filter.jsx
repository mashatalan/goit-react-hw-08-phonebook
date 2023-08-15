import { useDispatch } from 'react-redux';
import {
  filterContacts,
  filterContactsByNumber,
} from '../../redux/contacts/filterSlice';
import { Box, TextField } from '@mui/material';

function Filter() {
  const dispatch = useDispatch();

  const handleSetFilter = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  const handleSetFilterByNumber = evt => {
    dispatch(filterContactsByNumber(evt.currentTarget.value));
  };

  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      <TextField
        id='standard-basic'
        type='text'
        label='Find contacts by name'
        variant='standard'
        onChange={handleSetFilter}
        sx={{
          mb: '1rem',
          color: '#008080',
          backgroundColor: '#fffefe',
        }}
      />

      <TextField
        id='standard-basic'
        type='text'
        label='Find contacts by number'
        variant='standard'
        onChange={handleSetFilterByNumber}
        sx={{
          mb: '1rem',
          color: '#008080',
          backgroundColor: '#fffefe',
        }}
      />
    </Box>
  );
}

export default Filter;
