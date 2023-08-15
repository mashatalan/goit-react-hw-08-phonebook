import React from 'react';
import { Form, FormLabel, Input, Button } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import { toast } from 'react-hot-toast';

const phoneRegExp =
  '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.phonenumber.value;

    const isNotUnique = contacts.some(contact => contact.name === name);
    if (isNotUnique) {
      return toast.success(`"${name}" is already in contacts.`);
    }

    dispatch(
      addContact({
        name,
        number,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Name
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </FormLabel>
      <FormLabel>
        Number
        <Input
          type="tel"
          name="phonenumber"
          pattern={phoneRegExp}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </FormLabel>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default Phonebook;
