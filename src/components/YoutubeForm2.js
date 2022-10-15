import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';

// we ll refactor the code to the great extent by removing the onchange,onblur, value 

const initialValues = {
  name: "",
  email: "",
  channel: "",
};


const onSubmit = (values) => {
  console.log("form data", values); 
};

const validationSchema = yup.object({
    name: yup.string().required('required'),
    email: yup.string().email('invalid email format').required('required'),
    channel:yup.string().required('required')
})

function YoutubeForm2() {                    
  
  
    const formik = useFormik({
    initialValues, // short hand syntax
    onSubmit,
    validationSchema                    
  });



  return (
    
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="formContril">
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            {...formik.getFieldProps('name')}
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
            {...formik.getFieldProps('email')}
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
            {...formik.getFieldProps('channel')}
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

export default YoutubeForm2;
