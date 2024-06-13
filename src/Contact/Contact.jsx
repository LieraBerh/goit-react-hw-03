/* eslint-disable react/prop-types */
const Contact = ({ contacts }) => {
  const { id, name, number } = contacts;
  return <li key={id}></li>;
};
export default Contact;
