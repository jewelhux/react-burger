import React from 'react';
import {
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  const [nameValue, setNameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [passValue, setPassValue] = React.useState('');

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionContainer}>
        <div className={styles.linkContainer}>
          <Link className={`${styles.link} ${styles.active}`} to="/">
            Профиль
          </Link>
          <Link className={styles.link} to="/">
            История заказов
          </Link>
          <Link className={styles.link} to="/">
            Выход
          </Link>
        </div>
        <p className={styles.textLinkContainer}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={styles.inputContainer}>
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
      </div>
    </div>
  );
};

export default ProfilePage;
