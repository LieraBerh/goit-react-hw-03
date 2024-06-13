import { useState } from "react";

/* eslint-disable react/prop-types */
const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    addContact(name, number);

    setName("");

    setNumber("");
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Enter number"
        value={number}
        onChange={handleNumberChange}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
export default ContactForm;
