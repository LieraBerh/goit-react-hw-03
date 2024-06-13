/* eslint-disable react/prop-types */
import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          name={contact.name}
          id={contact.id}
          number={contact.number}
          key={contact.id}
        />
      ))}
    </ul>
  );
};
export default ContactList;
