import React, { useEffect } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './ProfilePage.module.css';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { editUser, logoutUser } from '../../services/actions/actions';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((store) => store.user.user);

  const [nameValue, setNameValue] = React.useState(userData!.name);
  const [emailValue, setEmailValue] = React.useState(userData!.email);
  const [passValue, setPassValue] = React.useState('');
  const [btnVisible, setBtnVisible] = React.useState(false);

  useEffect(() => {
    if (nameValue !== userData?.name || emailValue !== userData?.email || passValue) {
      setBtnVisible(true);
    } else {
      setBtnVisible(false);
    }
  }, [nameValue, emailValue, passValue, userData?.name, userData?.email]);

  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(logoutUser());
  };

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Данные обновлены');
    dispatch(editUser({ name: nameValue, email: emailValue, password: passValue }));
  };

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
          <Link className={styles.link} to="/" onClick={handleLogout}>
            Выход
          </Link>
        </div>
        <p className={styles.textLinkContainer}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form className={styles.inputContainer} onSubmit={handleSubmitForm}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => setNameValue(e.target.value)}
          value={nameValue}
          error={false}
          errorText={'Ошибка'}
        />
        <Input
          type="email"
          placeholder={'E-mail'}
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          name={'email'}
          error={false}
          errorText={'Ошибка'}
        />
        <Input
          type="password"
          placeholder={'Password'}
          onChange={(e) => setPassValue(e.target.value)}
          value={passValue}
          name={'password'}
          error={false}
          errorText={'Ошибка'}
        />
        {btnVisible ? (
          <div className={styles.buttons}>
            <Button htmlType="submit">Сохранить</Button>
            <Button htmlType="button">Отмена</Button>
          </div>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

export default ProfilePage;
