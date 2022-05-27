import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
  const { formData, handleUser, resetForm, isValidEmail } = useForm({
    email: '',
    name: '',
    password: '',
    repeat: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetForm();

    console.log(formData);
  };

  const { name, email, password, repeat } = formData;

  return (
    <div>
      <h1>Formulary</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label> Name: </label>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => handleUser(e)}
          className={name.length > 0 ? 'valid' : 'has-error'}
        />
        {name.trim().length === 0 && <span>Name is required</span>}
        <label> Email: </label>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => handleUser(e)}
          className={isValidEmail(email) ? 'valid' : 'has-error'}
        />
        {!isValidEmail(email) && <span>Email invalid</span>}
        <label> Password: </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => handleUser(e)}
          className={password.trim().length > 6 ? 'valid' : 'has-error'}
        />
        {password.trim().length < 6 && <span>Password must have 6 digits</span>}
        <label> Repeat Password: </label>
        <input
          type="password"
          placeholder="Repeat password"
          name="repeat"
          value={repeat}
          onChange={(e) => handleUser(e)}
          className={
            repeat === password && repeat.trim().length > 6
              ? 'valid'
              : 'has-error'
          }
        />
        {repeat !== password && <span>Passwords do not match</span>}
        <button type="submit">Submit</button>
        <button onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};
