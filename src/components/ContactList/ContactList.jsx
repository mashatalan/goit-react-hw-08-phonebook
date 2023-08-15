import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { fetchContacts } from 'redux/operations';
import { selectFilteredContacts } from '../../redux/selectors';

function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <ContactItem key={id} name={name} number={phone} id={id} />
      ))}
    </ul>
  );
}

export default ContactList;
