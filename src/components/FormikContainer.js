import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikControls from "./FormikControls";



function FormikContainer() {

    const dropdownOptions = [
        { key: 'select an option', value:'' },
        { key: 'option1', value:'option1' },
        { key: 'option2', value:'option2' },
        { key: 'option3', value:'option3' },
    ]

    const radioOptions = [
        { key: 'option1', value:'rOption1' },
        { key: 'option2', value:'rOption2' },
        { key: 'option3', value:'rOption3' }
    ]

    const checkboxOption = [
        { key: 'option1', value:'cOption1' },
        { key: 'option2', value:'cOption2' },
        { key: 'option3', value:'cOption3' }
    ]

    const initialValues = {
        email: "",
        description: "",
        selectOptions:"",
        radioOption:"",
        checkboxOption:[],
        birthDate:null
  };
  const validationSchema = yup.object({
    email: yup.string().required("required"),
    description: yup.string().required("required"),
    selectOptions: yup.string().required("required"),
    radioOption: yup.string().required("required"),
    checkboxOption: yup.array().min(1,'Required'),
    birthDate: yup.date().required('Required').nullable()

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
      {(formic) => (
        <Form>
          <FormikControls
            control="input"
            type="email"
            label="Email."
            name="email"
          />
          <FormikControls
            control="textarea"
            label="description."
            name="description"
          />
          <FormikControls
            control="select"
            label="Select a topic"
            name="selectOptions"
            options={dropdownOptions}
          />
          <FormikControls
            control="radio"
            label="Radio topic."
            name="radioOption"
            options={radioOptions}
          />
          <FormikControls
            control="checkbox"
            label="checkbox topic."
            name="checkboxOption"
            options={checkboxOption}
          />
          <FormikControls
            control="date"
            label="Pick a Date."
            name="birthDate"
          />
          <button type="submit">submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
