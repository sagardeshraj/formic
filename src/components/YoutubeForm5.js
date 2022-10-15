import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"; // import Formik , Form,
import * as yup from "yup";
import ErrorText from "./ErrorText";

// reseting the entire form after submitting --

const initialValues = {
  name: "",
  email: "",
  channel: "",
  Comment: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
};


const onSubmit = (values, onSubmitProps) => {
  console.log("form data", values);
  console.log('onSubmitProps', onSubmitProps);
  onSubmitProps.setSubmitting(false)
  onSubmitProps.resetForm();
};

const validationSchema = yup.object({
  name: yup.string().required("required"),
  email: yup.string().email("invalid email format").required("required"),
  channel: yup.string().required("required"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "required";
  }
  return error;
};

function YoutubeForm5() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize

      >
        {
          formik => {
            console.log(formik)
            return (
              <Form action="">
                <div className="formContril">
                  <label htmlFor="name">name</label>
                  <Field type="text" name="name" id="name" />
                  <ErrorMessage name="name" component={ErrorText} />
                </div>
                <br />

                <div className="formContril">
                  <label htmlFor="email">email</label>
                  <Field type="email" name="email" id="email" />
                  <ErrorMessage name="email" component={ErrorText} />
                </div>
                <br />

                <div className="formContril">
                  <label htmlFor="channel">channel</label>
                  <Field type="text" name="channel" id="channel" />
                  <ErrorMessage name="channel" component={ErrorText} />
                </div>
                <br />

                <div>
                  <label htmlFor="comments">comment</label>
                  <Field
                    as="textarea"
                    id="comments"
                    name="comments"
                    validate={validateComments}
                  />
                  <ErrorMessage name="comments" component={ErrorText} />
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
                  <label htmlFor="secondaryPh">secondaryPh
                  </label>
                  <Field type="text" name="phoneNumber[1]" id="secondaryPh" />
                </div>

                <button type="submit" disabled={!formik.isValid || formik.isSubmitting} >submit</button>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}

export default YoutubeForm5;
