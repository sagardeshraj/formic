import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"; // import Formik , Form
import * as yup from "yup";
import ErrorText from "./ErrorText";

//this file shows the disabling the submit usecases
// and also how render prop patter work

const initialValues = {
  name: "",
  email: "",
  channel: "",
  Comment: "",
  address:"",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
};

const onSubmit = (values, onSubmitProps) => {
  console.log("form data", values);
  console.log("onSubmitProps", onSubmitProps);
  onSubmitProps.setSubmitting(false);
};

const validationSchema = yup.object({
  name: yup.string().required("required"),
  email: yup.string().email("invalid email format").required("required"),
  channel: yup.string().required("required"),
  address:yup.string().required('required')
});

const validateComments = (value) => {         // apply your own logik like form1
  let error;
  if (!value) {
    error = "required";
  }
  return error;
};

function YoutubeForm4() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        // validateOnBlur={false}
        // validateOnChange={false} // get to know more about it
      >
        {
          //  wrapping the entire form in the render prop pattern to get the formik prop
          (formik) => {
            console.log('formik prop' ,formik);
            return (
              <Form action="">
                <div>
                  <label htmlFor="name">name</label>
                  <Field type="text" name="name" id="name" />
                  <ErrorMessage name="name" component={ErrorText} />
                </div>

                <div>
                  <label htmlFor="email">email</label>
                  <Field type="email" name="email" id="email" />
                  <ErrorMessage name="email" component={ErrorText} />
                </div>

                <div>
                  <label htmlFor="channel">channel</label>
                  <Field type="text" name="channel" id="channel" />
                  <ErrorMessage name="channel" component={ErrorText} />
                </div>

                <div>
                  <label htmlFor="comments">comments</label>
                  <Field
                    as="textarea"
                    id="comments"
                    name="comments"
                    validate={validateComments}
                  />
                  <ErrorMessage name="comments" component={ErrorText} />
                </div>

                <div>
                  <label htmlFor="address">address</label>
                  <Field name='address'>
                    {
                      (props)=>{
                        console.log('Field prop ', props );
                        const { field , form, meta } = props
                        return (
                          <div>
                            <input type='text' id="address" {...field} />
                            {meta.touched && meta.error ? <div>{meta.error}</div> : null}                            
                          </div>
                        )
                      }
                    }
                  </Field>
                </div>

                <div>
                  <label htmlFor="facebook">facebook profile</label>
                  <Field type="text" name="social.facebook" id="facebook" />
                </div>

                <div>
                  <label htmlFor="twitter">twitter profile</label>
                  <Field type="text" name="social.twitter" id="twitter" />
                </div>

                <div>
                  <label htmlFor="primaryPh">facebook profile</label>
                  <Field type="text" name="phoneNumber[0]" id="primaryPh" />
                </div>

                <div>
                  <label htmlFor="secondaryPh">twitter profile</label>
                  <Field type="text" name="phoneNumber[1]" id="secondaryPh" />
                </div>

                <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                  submit
                </button>
              </Form>
            );
          }
        }
      </Formik>
    </div>
  );
}

export default YoutubeForm4;
