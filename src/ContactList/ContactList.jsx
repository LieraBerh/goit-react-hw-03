/* eslint-disable react/prop-types */
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          name={contact.name}
          id={contact.id}
          number={contact.number}
          key={contact.id}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
export default ContactList;
