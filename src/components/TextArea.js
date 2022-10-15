import React from 'react'
import { Field , ErrorMessage } from 'formik';
import ErrorText from './ErrorText';

function TextArea(props) {
    const { label, name, ...rest } = props
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <Field as='textarea' id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={ErrorText} />
    </div>
  )
}

export default TextArea