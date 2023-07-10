import React from 'react';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import styles from './ResetPassPage.module.css';
import { api } from '../../utils/api';

const ResetPassPage = () => {
  const [codeValue, setCodeValue] = React.useState<string>('');
  const [passValue, setPassValue] = React.useState<string>('');
  const navigate = useNavigate();

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.removeItem('validEmail');

    api.resetPass({ password: passValue, token: codeValue });
    navigate('/login');
  };

  return (
    <>
      {localStorage.getItem('validEmail') !== 'true' ? (
        <Navigate to="/" />
      ) : (
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
              onChange={(e) => setCodeValue(e.target.value)}
              value={codeValue}
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
      )}
    </>
  );
};

export default ResetPassPage;
