**tipos de eventos**
Para saber quetipo de evento es un submit o la funcion del onchange, declararlos como callback dentro del input. Eso luego me posiciono sobre el evento y me dice que tipo de vento es.
decalralo asi y luego ver el tipo de evento:

```
 <form onSubmit={(e) => handleSubmit(e)}>

```

**Formik** dentro del hook useFormik tengo varios argumentos que puedo desesctructurar,
entre ellos, handleSubmit, validate, initialVlues, etc.

_validate_ lo puedo trabajar como una funcion aparte para hacerlo mas sencillo, y luego agregarlo dentro del hook., El onSubmit dentro del hook, es llamado desde el form usando la funcion handleSubmit que tambien desestructure del Formik.
Para crear el **validate** below an example:

```
onst FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = 'Required';
    } else if (firstName.length < 3) {
      errors.firstName = 'Must be 3 characters or more';
    }

    if (!lastName) {
      errors.lastName = 'Required';
    } else if (lastName.length < 3) {
      errors.lastName = 'Must be 3 characters or more';
    }

    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
        return errors
  };
```

otros methodos interesantes de **Formik** son el **onBlur** con handleBlur , el **touched** , **errors**.

**otra forma de hacer validaciones es a traves de Yup** primero se intala , ver documentation en NPM y luego hago un metodo de validacion parecido al siguiente :

```
  validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .required('this is required')
        .max(15, 'max 15 characters'),
      lastName: Yup.string()
        .required('this is required')
        .min(2, 'min 2 characters'),
      email: Yup.string().email('invalid format').required('this is required'),
    }),
```

**validaciones en el HTML** para evitar usar el onChange, onBlur, value , name; puedo utilizar el metodo _getFieldProps_ el cual hace estas validaciones. Abajo la diferencia de codigos.

```
        <input type="text" {...getFieldProps('firstName')} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>

        <input
          type="text"
          name="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />
```

**comodin interfaces** mer sirve para decir le voy a seguir pasando atributos, no voy a poner todos [x: string]: any;

##**Importante**
**Formik abstraction useField**

con este hook puedo crear un componente al cual le pasare unos props, lo desestructurare consiguendo el _field_ y el _meta_, donde encontrare los datos pasados en el props cuando desestructuro porps, los methods y funciones del Formik como errors, toTouched, onBlur, onCHange etc; estan en el field. El Meta se ultiliza para utilizar los metodos que hay en el field. Luego de crear el componente le pasa los atributos que quiera en el componente principal. Below an example:

```

import { useField } from 'formik';

interface ImputCOmponent {
  className?: string;
  label: string;
  name: string;
  type?: string;
  placeHolder?: string;
  htmlFor?: string;
  [x: string]: any;
}

const MyTextInput = ({ label, ...props }: ImputCOmponent) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}> {label}</label>
      <input className={props.className} {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error"> {meta.error} </span>
      ) : null}
    </>
  );
};

export default MyTextInput;


LUEGO

      <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeHolder="First Name"
              htmlFor="firstName"
            />


```

**ver casos en el codigo para el _mySelect_ y para el _checkBox_ que son similares** es importante resaltar el el name="" que le pongo a cada elemento debe hacer match con lo que defino en la interface y tambien en el **validationSchema** sino no funcionará.

**validador dinamico de campos**--------**IMPORTANTE**

Primero creo la variable que será un gran objeto donde estarán todas las reglas:

```
const validationsCamps: { [key: string]: any } = {};

```

Luego tendre que barrer todo el objeto que recibo del JSON para ver cuales será los campos que tengan validación. Para lo cual primero vere si tiene el campo validación sino le pido que continúe.
Luego vreo una variable Let la cual tendrá el valor con lo que inicia el cada validación dentro del validationSchema **Yup.string()**. Llegado este puento ya se que el vampo tiene validaciones. Esas validaciones serán un nuevo objeto, por lo cual debo barrerlo. Desce aquí voy barriendo cada una de las validaciones usando if statement, viendo que tipo de validación y agregándole instrucciones al Yup.string() a traves del let creado.
Por ultimo relleno el validationCamps con la estructura final solicitada por **validationSchema**. Para ese campo que tiene validación, tomo el nombre del campo y le agrego la validación.
Finalmente le agrego el Yup.object().shape( validationsCamps).

EJEMPLO JSON

```
[
  {
    "label": "First Name",
    "name": "firstName",
    "placeholder": "Enter your first name",
    "type": "text",
    "value": "",
    "validation": [
      {
        "type": "required",
        "message": "First name is required"
      }
]

```

EJEMPLO SCHEMA

```
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
  }

  validationsCamps[key.name] = schema;
}

const validationSchema = Yup.object().shape(validationsCamps);
```
