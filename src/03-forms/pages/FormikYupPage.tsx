import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {
  const { handleSubmit, handleReset, errors, touched, getFieldProps } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: (values) => {
        console.log(values);

        //   alert(JSON.stringify(values, null, 2));
      },

      validationSchema: Yup.object().shape({
        firstName: Yup.string()
          .required('this is required')
          .max(15, 'max 15 characters'),
        lastName: Yup.string()
          .required('this is required')
          .min(2, 'min 2 characters'),
        email: Yup.string()
          .email('invalid format')
          .required('this is required'),
      }),
    });

  return (
    <div>
      <h1>Formik tutorial</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName"> First Name</label>
        <input type="text" {...getFieldProps('firstName')} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName"> Last Name</label>
        <input type="text" {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span> {errors.lastName}</span>}

        <label htmlFor="email"> Email</label>
        <input type="email" {...getFieldProps('email')} />
        {touched.email && errors.email && <span> {errors.email}</span>}

        <button type="submit">Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};
