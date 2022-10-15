import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"; // import Formik , Form
import * as yup from "yup";
import ErrorText from "./ErrorText";

// now we ll do the same task with less code and by wrapping the entire form with Formik and pass some props
// Formik component is the replacement of the useformik hook and we ll se three more component it provided previously
// 1), Formik -- for wrapping the whole  form  
 //2). Form   --for replace the form tag with Form
//3). Field --to replace the input field and having done with the onchange, onblur , and value and it is by default 
//            it is the input ---default value is input so give it 'as' attribute for textarea,radio,select..ect
//4). ErrorMessage--- showing the error codition with the correct name context

const initialValues = {
  name: "",
  email: "",
  channel: "",
  Comment:'',
  social:{
    facebook:'',
    twitter: '',
  },
  phoneNumber:['','']
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = yup.object({
  name: yup.string().required("required"),
  email: yup.string().email("invalid email format").required("required"),
  channel: yup.string().required("required"),
});

const validateComments = value =>{          // individual field level validation, automatically get value for field its
    let error;                              // on it is present
    if(!value){
        error = 'required'
    }
    console.log(value)
    return error;
}

function YoutubeForm3() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        // validateOnBlur={false}
        // validateOnChange={false} // get to know more about it 
      >
        <Form action="">
          <div className="formContril">
            <label htmlFor="name">name</label>
            <Field type="text" name="name" id="name" />
            {/* <ErrorMessage name="name" component='div'/> */}
            <ErrorMessage name="name" component={ErrorText}/>
          </div>
          <br />

          <div className="formContril">
            <label htmlFor="email">email</label>
            <Field type="email" name="email" id="email" />
            {/* <ErrorMessage name="email" component='div' /> */}
            <ErrorMessage name="email" component={ErrorText} />
          </div>
          <br />

          <div className="formContril">
            <label htmlFor="channel">channel</label>
            <Field type="text" name="channel" id="channel" />
            {/* <ErrorMessage name="channel" component='div' /> */}
            <ErrorMessage name="channel" component={ErrorText} />
          </div>
          <br />

          <div>
            <label htmlFor="comments">comment</label>
            <Field as='textarea' id='comments' name='comments' validate={validateComments} />
            <ErrorMessage name="comments" component={ErrorText} />
          </div>

          <div>
            <label htmlFor="facebook">facebook profile</label>
            <Field type="text" name="social.facebook" id="facebook"  />
          </div>

          <div>
            <label htmlFor="twitter">twitter profile</label>
            <Field type="text" name="social.twitter" id="twitter"  />
          </div>

          <div>
            <label htmlFor="primaryPh">facebook profile</label>
            <Field type="text" name="phoneNumber[0]" id="primaryPh"  />
          </div>

          <div>
            <label htmlFor="secondaryPh">twitter profile</label>
            <Field type="text" name="phoneNumber[1]" id="secondaryPh"  />
          </div>

          <button type="submit">submit</button> 
        </Form>
      </Formik>
    </div>
  );
}

export default YoutubeForm3;
