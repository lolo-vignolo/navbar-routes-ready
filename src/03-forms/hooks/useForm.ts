import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initialState: T) => {
  const [formData, setRegisterData] = useState(initialState);

  const handleUser = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setRegisterData(initialState);
  };

  const isValidEmail = (email: string) => {
    const refCharacters =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return refCharacters.test(email);
  };

  return {
    formData,
    handleUser,
    resetForm,
    isValidEmail,
  };
};
