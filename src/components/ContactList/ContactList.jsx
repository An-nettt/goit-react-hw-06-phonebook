import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import ContactListElem from '../ContactListElem';
import { ContactListWrapper } from '../../styled';
import { getContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);

  return (
    <ContactListWrapper>
      {contacts.map(({ id, name, number }) => (
        <ContactListElem
          contactsEl={{ id, name, number }}
          // onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactListWrapper>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   contactsArrayOf: PropTypes.arrayOf(PropTypes.string),
//   onDeleteContact: PropTypes.func.isRequired,
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.number.isRequired,
// };
