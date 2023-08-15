import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { HiUser } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';
import {
  ContactTel,
  ContactName,
  ContactInfo,
} from 'components/ContactItem/ContactItem.styled';
import { Controls, ControlsSave } from '../Controls/Controls';
import EditForm from 'components/EditForm';
import { editContact, deleteContact } from 'redux/contacts/contactsOperation';
import { Box } from '@mui/material';
import { cardNumberFormating } from 'utilities/cardNumberFormating';

function ContactItem({ name, number, id }) {
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleEditContact = (newName, newNumber) => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      setEditName(prevName => (newName ? newName : prevName));
      setEditNumber(prevNumber => (newNumber ? newNumber : prevNumber));
      setIsEdit(false);

      dispatch(
        editContact({
          id: id,
          name: newName ? newName : name,
          number: newNumber ? newNumber : number,
        }),
      );
    }
  };

  return (
    <Box
      component='li'
      sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}
    >
      {/* if contact saved show contact info */}

      {!isEdit && (
        <>
          <ContactInfo>
            <ContactName>
              <HiUser fill='#008080' />
              {name}:
            </ContactName>

            <ContactTel>
              <ImPhone fill='#008080' />
              {cardNumberFormating(number)}
            </ContactTel>
          </ContactInfo>
          <Controls
            id={id}
            onDeleteContact={handleDeleteContact}
            onEditContact={handleEditContact}
          />
        </>
      )}

      {/* if contact is edit show edit form */}
      {isEdit && (
        <EditForm
          name={editName}
          number={editNumber}
          onEditContact={handleEditContact}
        >
          <ControlsSave id={id} onDeleteContact={handleDeleteContact} />
        </EditForm>
      )}
    </Box>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
