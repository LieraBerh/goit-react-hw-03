/* eslint-disable react/prop-types */
const Contact = ({ id, name, number, handleDelete }) => {
  return (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
};
export default Contact;
