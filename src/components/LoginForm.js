import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikControls from "./FormikControls";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup.string().email("invalid email formate").required("required"),
    password: yup.string().required("required"),
  });

  const onSubmit = (value) => {
    console.log("form data", value);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControls
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControls
              control="input"
              type="password"
              label="password"
              name="password"
            />
            <button type="submit" disabled={!formik.isValid}>
              submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
