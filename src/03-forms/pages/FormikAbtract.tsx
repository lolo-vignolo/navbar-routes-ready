import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckBox, MyTextInput, MySelect } from '../components';
import '../styles/styles.css';

export const FormikAbstract = () => {
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
            console.log(values);
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
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="First Name"
              htmlFor="firstName"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Last Name"
              htmlFor="lastName"
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              htmlFor="email"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Select</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="admin">Admin</option>
            </MySelect>

            <MyCheckBox label="Terms & conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};


