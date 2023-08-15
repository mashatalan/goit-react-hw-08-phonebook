import ContactItem from 'components/ContactItem';
import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectFilteredContactsByNumber,
} from '../../redux/contacts/contactsSelectors';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const contactsByNumber = useSelector(selectFilteredContactsByNumber);

  const uniqueContacts = [...contacts, ...contactsByNumber].filter(
    (name, index, array) => array.indexOf(name) === index,
  );

  return (
    <ul>
      {uniqueContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}

export default ContactList;
