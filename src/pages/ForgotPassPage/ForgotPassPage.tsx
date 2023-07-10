import React from 'react';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ForgotPassPage.module.css';
import { api } from '../../utils/api';

const ForgotPassPage = () => {
  const [emailValue, setEmailValue] = React.useState<string>('');
  const navigate = useNavigate();

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    api.forgotPass(emailValue).then(() => {
      localStorage.setItem('validEmail', 'true');
      navigate('/reset-password');
    });
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
