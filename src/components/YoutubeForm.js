import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

// managing the form state
//handlinng the form submission
// validation and error messages

const initialValues = {
  // 'name' should be as it is
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  // 'onsubmit' should be as it is
  // console.log("form data", values); // on submit it automatically call this function, values === formik.values
};

const validate = (values) => {
  // 'validate' should ve as it is
  // values.name values.email values.channel
  // formik.error contain the arror object 
  const errors = {};
  console.log(values);
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.channel) {
    errors.channel = "Required";
  } else if (values.channel.length > 20) {
    errors.channel = "Must be 20 characters or less";
  }
   
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const validationSchema = yup.object({
  name: yup.string().required("required"),
  email: yup.string().email("invalid email format").required("required"),
  channel: yup.string().required("required"),
});

function YoutubeForm() {
  //component

  const formik = useFormik({
    initialValues, // short hand syntax
    onSubmit,
    // validate,           // instead use below
    validationSchema, // must be exact same name as it is used in formic
  });

  console.log(formik.values);       // an object to show the current values of the states(inbuilt)
  // console.log(formik.touched);       // same object but for showing error
  // console.log(formik.touched);      // same object but for showing touched(visited field) once touched sets to true
  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="formContril">
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <br />

        <div className="formContril">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <br />

        <div className="formContril">
          <label htmlFor="channel">channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <br />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
