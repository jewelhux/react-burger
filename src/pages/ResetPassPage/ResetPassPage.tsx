import React from 'react';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './ResetPassPage.module.css';

const ResetPassPage = () => {
  const [nameValue, setNameValue] = React.useState('');
  const [passValue, setPassValue] = React.useState('');

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('ResetPassPage');
    // dispatch(registerUser({ email: emailValue, password: passValue, name: nameValue }));
  };

  return (
    <div className={styles.mainContainer}>
      <h2>Восстановление пароль</h2>
      <form className={styles.formContainer} onSubmit={handleSubmitForm}>
        <PasswordInput
          onChange={(e) => setPassValue(e.target.value)}
          value={passValue}
          placeholder={'Введите новый пароль'}
          name={'password'}
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={(e) => setNameValue(e.target.value)}
          value={nameValue}
          error={false}
          errorText={'Ошибка'}
        />
        <Button htmlType="submit">Сохранить</Button>
      </form>
      <div className={styles.linkContainer}>
        <p>Вспомнили пароль?</p>
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default ResetPassPage;
