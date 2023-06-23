import React from 'react';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './ForgotPassPage.module.css';

const ForgotPassPage = () => {
  const [emailValue, setEmailValue] = React.useState('');

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('ForgotPassPage');
    // dispatch(registerUser({ email: emailValue, password: passValue, name: nameValue }));
  };

  return (
    <div className={styles.mainContainer}>
      <h2>Восстановление пароля</h2>
      <form className={styles.formContainer} onSubmit={handleSubmitForm}>
        <EmailInput
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          name={'email'}
          placeholder="E-mail"
        />
        <Button htmlType="submit">Восстановить</Button>
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

export default ForgotPassPage;
