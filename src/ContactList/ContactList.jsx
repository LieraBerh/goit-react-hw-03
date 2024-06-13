/* eslint-disable react/prop-types */
import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <Contact contacts={contacts} />
    </div>
  );
};
export default ContactList;
