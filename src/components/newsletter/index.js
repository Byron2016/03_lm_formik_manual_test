import React from "react";
import { Formik, Field, Form, ErrorMessage, FormikProvider } from "formik";
import * as Yup from "yup";
import "./style.scss";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div className="row">
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            type="text"
            className="input"
            placeholder="Nombre de pila"
          />
          <ErrorMessage name="firstName">
            {(message) => <div className="error">{message}</div>}
          </ErrorMessage>
        </div>
        <div className="row">
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" className="input" />
          <ErrorMessage name="lastName">
            {(message) => <div className="error">{message}</div>}
          </ErrorMessage>
        </div>
        <div className="row">
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" className="input" />
          <ErrorMessage name="email">
            {(message) => <div className="error">{message}</div>}
          </ErrorMessage>
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
