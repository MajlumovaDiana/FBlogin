import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import "./CreateAccount.scss"

const forError = Yup.object().shape({
    firstName: Yup.string().max(15, 'Must be 15 characters or less').required(''),
    lastName: Yup.string().email(15, 'Invalid email address').required(''),
})

function CreateAccount() {
    return (
        <>
            <section className='qeydiyyatsection'>
                <div className='img_fb_page'>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="LOGO" />
                </div>
                <div className='Main_div'>
                    <h3>Sign Up</h3>
                    <p>It’s quick and easy.</p>
                    <hr />
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '' }}
                        validationSchema={forError}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values));
                                setSubmitting(false);
                            }, 400)
                        }}
                    >
                        {({ touched }) => (
                            <Form className='Name'>
                                <label htmlFor="firstName"></label>
                                <Field name="firstName" className={`normal ${touched.firstName && "error"}`} type="text" />


                                <label htmlFor="lastName"></label>
                                <Field name="lastName" className={`normal ${touched.lastName && "error"}`} type="text" />

                            </Form>)}

                    </Formik>
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '' }}
                        validationSchema={Yup.object({
                            firstName: Yup.string()
                                .max(15, 'Must be 15 characters or less')
                                .required(''),
                            lastName: Yup.string()
                                .max(20, 'Must be 20 characters or less')
                                .required(''),
                            email: Yup.string().email('Invalid email address').required(''),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ touched }) => (
                            <Form className='EmailPass'>
                                <label htmlFor="email"></label>
                                <Field name="email" type="email" className={`normal ${touched.email && "error"}`} />
                                <ErrorMessage name="email" />

                                <label htmlFor="lastName"></label>
                                <Field className={`normal ${touched.lastName && "error"}`} name="lastName" type="password" />
                                <ErrorMessage name="lastName" />

                            </Form>
                        )}
                    </Formik>

                    <div className='tevellud'>
                        <p>Brithday</p>
                        <form >

                            <select >
                                <option selected>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>

                            
                            <select  >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                            <select>
                                <option selected>2023</option>
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                                <option>2000</option>
                                <option>1999</option>
                                <option>1998</option>
                                <option>1997</option>
                                <option>1996</option>
                                <option>1995</option>
                                <option>1994</option>
                                <option>1993</option>
                                <option>1991</option>
                                <option>1991</option>
                                <option>1990</option>
                                <option>1989</option>
                                <option>1988</option>
                                <option>1987</option>
                                <option>1986</option>
                                <option>1985</option>
                                <option>1984</option>
                                <option>1983</option>
                                <option>1982</option>
                                <option>1981</option>
                                <option>1980</option>
                                <option>1979</option>
                                <option>1978</option>
                                <option>1977</option>
                                <option>1976</option>
                                <option>1975</option>
                                <option>1974</option>
                                <option>1973</option>
                                <option>1972</option>
                                <option>1971</option>
                                <option>1970</option>
                                <option>1969</option>
                                <option>1968</option>
                                <option>1967</option>
                                <option>1966</option>
                                <option>1965</option>
                                <option>1964</option>
                                <option>1963</option>
                                <option>1962</option>
                                <option>1961</option>
                                <option>1960</option>

                            </select>
                        </form>
                    </div>
                    <div className="cinsDiv">
                        <p>Gender</p>
                        <Formik>
                            <Form>
                                <div>
                                    Famale
                                    <Field type="radio" value="famale"></Field>
                                </div>
                                <div>
                                    Male
                                    <Field type="radio" value="male"></Field>
                                </div>
                                <div>
                                    Custom
                                    <Field type="radio" value="custom"></Field>

                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <div className='Rule'>
                        <p>People who use our service may have uploaded your contact information to Facebook.</p>
                        <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                    </div>
                    <div className='bottomRooter'>
                        <button>Kaydol</button>
                        <Link to={"/"}>I have an account</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CreateAccount