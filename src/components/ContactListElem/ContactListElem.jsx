// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ContactListEl, Text, ButtonDel } from '../../styled';
import { deleteContact } from 'redux/actions';

const ContactListElem = ({ contactsEl }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(contactsEl.id));

  return (
    <>
      <ContactListEl>
        <Text>
          {contactsEl.name} : {contactsEl.number}
        </Text>
        <ButtonDel type="button" onClick={onDeleteContact}>
          Delete
        </ButtonDel>
      </ContactListEl>
    </>
  );
};

export default ContactListElem;

// ContactListElem.propTypes = {
//   contactsEl: PropTypes.arrayOf(PropTypes.string),
//   onDeleteContact: PropTypes.func.isRequired,
// };
