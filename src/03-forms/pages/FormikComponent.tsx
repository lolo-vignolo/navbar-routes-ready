import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponent = () => {
  return (
    <div>
      <h1>Formik tutorial</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          jobType: '',
          terms: false,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .required('this is required')
            .max(15, 'max 15 characters'),
          lastName: Yup.string()
            .required('this is required')
            .min(2, 'min 2 characters'),
          email: Yup.string()
            .email('invalid format')
            .required('this is required'),
          terms: Yup.boolean().oneOf([true], 'you must accept the terms'),
          jobType: Yup.string()
            .required('this is required')
            .notOneOf(['admin'], "you can't be admin"),
        })}
      >
        {(Formik) => (
          <Form>
            <label htmlFor="firstName"> First Name</label>
            <Field name="firstName" type="text" placeHolder="First Name" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName"> Last Name</label>
            <Field name="lastName" type="text" placeHolder="Last Name" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email"> Email</label>
            <Field name="email" type="email" placeHolder="Email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType"> Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Select</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="admin">Admin</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkBox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};


