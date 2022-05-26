import { ErrorMessage, useField } from 'formik';

interface ImputCOmponent {
  className?: string;
  label: string;
  name: string;
  placeHolder?: string;
  [x: string]: any;
}

export const MySelect = ({ label, ...props }: ImputCOmponent) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.name}> {label}</label>
      <select className={props.className} {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error ? (
        <span className="error"> {meta.error} </span>
      ) : null} */}
    </>
  );
};
