import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikControls from "./FormikControls";

function EnrollmentForm() {
  const dropdownOptions = [
    { key: "select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];

  const checkboxOption = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };

  const validationSchema = yup.object({
    email: yup.string().email("invalid email format").required("required"),
    bio: yup.string().required("required"),
    course: yup.string().required("required"),
    courseDate: yup.date().required("required").nullable(),
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
              label="Email."
              name="email"
            />
            <FormikControls
            control="textarea"
            label="Bio."
            name="bio"
          />
            <FormikControls
              control="select"
              label="Course"
              name="course"
              options={dropdownOptions}
            />
            <FormikControls
              control="checkbox"
              label="Your skill set"
              name="skills"
              options={checkboxOption}
            />
            <FormikControls
            control="date"
            label="Course date"
            name="courseDate"
          />
          <button type="submit" disabled={!formik.isValid} >submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default EnrollmentForm;
