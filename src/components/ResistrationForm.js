import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikControls from "./FormikControls";

function ResistrationForm() {
  const options = [
    { key: 'Email', value: "emailMOC" },
    { key: 'Telephone', value: "telephoneMOC" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const onSubmit = (value) => {
    console.log("formdata", value);
  };

  const validationSchema = yup.object({
    email: yup.string().email("invalid email format").required("required"),
    password: yup.string().required("required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), ""], "password must match")
      .required("required"),
    modeOfContact: yup.string().required("required"),
    phone: yup.string().when("modeOfContact", {
      is: "telephoneMOC",
      then: yup.string().required("required"),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return <Form>
            <FormikControls control ='input' type='email' label='Email' name='email' />
            <FormikControls control ='input' type='password' label='Password' name='password' />
            <FormikControls control ='input' type='password' label='confirmPassword' name='confirmPassword' />
            <FormikControls control ='radio'  label='Mode of contact' name='modeOfContact' options={options} />
            <FormikControls control ='input' type='text' label='Phone' name='phone'/>
            <button type="submit" disabled={!formik.isValid} >submit</button>
        </Form>
      }}
    </Formik>
  );
}

export default ResistrationForm;
