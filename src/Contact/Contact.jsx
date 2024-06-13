/* eslint-disable react/prop-types */
const Contact = ({ id, name, number }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button>Delete</button>
    </li>
  );
};
export default Contact;
