import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MySelect, MyTextInput } from '../components';
import formJason from '../data/dinamicData.json';

const initialValues: { [key: string]: any } = {};

const validationsCamps: { [key: string]: any } = {};

for (const key of formJason) {
  initialValues[key.name] = key.value;

  if (!key.validation) continue;

  let schema = Yup.string();

  for (const rule of key.validation) {
    if (rule.type === 'required') {
      schema = schema.required(rule.message);
    }
    if (rule.type === 'minlength') {
      schema = schema.min((rule as any).length, rule.message);
    }
    if (rule.type === 'maxlength') {
      schema = schema.max((rule as any).length, rule.message);
    }
    if (rule.type === 'email') {
      schema = schema.email(rule.message);
    }
    if (rule.type === 'password') {
      schema = schema.min(8, rule.message);
    }
    if (rule.type === 'confirmPassword') {
      schema = schema.oneOf([Yup.ref('password'), null], rule.message);
    }
  }

  validationsCamps[key.name] = schema;
}

const validationSchema = Yup.object().shape(validationsCamps);

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            console.log(values);
          }, 400);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            {formJason.map((item, index) => {
              if (item.type === 'select') {
                return (
                  <MySelect key={index} label={item.label} name={item.name}>
                    <option value="">Select</option>
                    {item.options!.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              if (
                item.type === 'text' ||
                item.type === 'password' ||
                item.type === 'email'
              ) {
                return (
                  <MyTextInput
                    key={index}
                    label={item.label}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                  />
                );
              }
              return <span> Type: {item.type} is not suported</span>;
            })}

            <button type="submit">Submit</button>
            <button onClick={formik.handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
