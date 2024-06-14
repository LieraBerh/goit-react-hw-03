/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    addContact(values.name, values.number);
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="form">
        <label className="label">
          <span>Name</span>
          <Field name="name" placeholder="Enter name" className="input" />
          <ErrorMessage name="name" component="span" className="errorMsg" />
        </label>
        <label className="label">
          <span>Number</span>
          <Field name="number" placeholder="Enter number" className="input" />
          <ErrorMessage name="number" component="span" className="errorMsg" />
        </label>
        <button className="submitBtn" type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
