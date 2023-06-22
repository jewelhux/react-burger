import React from 'react';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './RegisterPage.module.css';
import { registerUser } from '../../services/actions/actions';
import { useAppDispatch } from '../../services/store';

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const [nameValue, setNameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [passValue, setPassValue] = React.useState('');

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registerUser({ email: emailValue, password: passValue, name: nameValue }));
  };

  return (
    <div className={styles.mainContainer}>
      <h2>Регистрация</h2>
      <form className={styles.formContainer} onSubmit={handleSubmitForm}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => setNameValue(e.target.value)}
          value={nameValue}
          error={false}
          errorText={'Ошибка'}
        />
        <EmailInput
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          name={'email'}
          placeholder="E-mail"
        />
        <PasswordInput
          onChange={(e) => setPassValue(e.target.value)}
          value={passValue}
          name={'password'}
        />
        <Button htmlType="submit">Зарегистрироваться</Button>
      </form>
      <div className={styles.linkContainer}>
        <p>Уже зарегестрированы?</p>
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
