import { ErrorMessage, useField } from 'formik';

interface ImputCOmponent {
  className?: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  htmlFor?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: ImputCOmponent) => {
  // const [field, meta] = useField(props);
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.name}> {label}</label>
      <input className={props.className} {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error ? (
        <span className="error"> {meta.error} </span>
      ) : null} */}
    </>
  );
};
