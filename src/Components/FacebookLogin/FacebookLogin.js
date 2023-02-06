import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FacebookLogin.scss';
import { Link } from 'react-router-dom';

const Eroor = Yup.object().shape({
  firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Enter correctly'),
  email: Yup.string().email('Invalid email address').required('Enter correctly'),
})

function FacebookLogin() {
  return (
    <section className='LoginSec'>
      <div className='Image'>
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="LOGO" />
      </div>
      <div className='FormikDiv'>
        <h3>Welcome to Facebook</h3>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '' }}
          validationSchema={Eroor}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched }) => (
          <Form>
            <label htmlFor="email"></label>
            <Field className={`normal ${errors.email &&touched.email && "error"}`} name="email" type="email" placeholder="Email"/>
            <ErrorMessage name='email'/>
            <label htmlFor="firstName"></label>
            <Field className={`normal ${errors.firstName && touched.firstName &&"error"}`} name="firstName" type="password" placeholder="Password"/>
            <ErrorMessage name='firstName'/>
            <button type="submit">Log In</button>
          </Form>
          )
          }
        </Formik >

        <div className='Bottom'>
          <a href="!№">Forgot password?</a>
          <p>or</p>
          <Link className='Btn' to={"/createaccount"}>Create new account</Link>
        </div>
      </div >
    </section >
  )
}


export default FacebookLogin