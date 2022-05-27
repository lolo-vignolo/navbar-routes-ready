import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          password2: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            console.log(values);
          }, 400);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required('this is required')
            .min(2, 'min 2 characters')
            .max(15, 'max 15 characters'),
          email: Yup.string()
            .email('invalid format')
            .required('this is required'),
          password: Yup.string()
            .min(6, 'min 6 characters')
            .required('this is required'),
          password2: Yup.string()
            .required('this is required')
            .oneOf([Yup.ref('password'), null], 'passwords must match'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
              htmlFor="name"
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              htmlFor="email"
            />
            <MyTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              htmlFor="password"
            />
            <MyTextInput
              label="Repeat Password"
              name="password2"
              type="password"
              placeholder="Password"
              htmlFor="password2"
            />

            <button type="submit">Submit</button>
            <button onClick={formik.handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
