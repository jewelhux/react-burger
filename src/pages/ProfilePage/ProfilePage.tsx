import React, { useEffect } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ProfilePage.module.css';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { editUser } from '../../services/actions';
import { isValidEmail, isValidName, isValidPassword } from '../../utils/utils';
import { IUser } from '../../utils/interfaces';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector<IUser | null>((store) => store.user.user);

  const [nameValue, setNameValue] = React.useState<string>(userData!.name);
  const [emailValue, setEmailValue] = React.useState<string>(userData!.email);
  const [passValue, setPassValue] = React.useState<string>('');
  const [btnVisible, setBtnVisible] = React.useState<boolean>(false);

  useEffect(() => {
    if (nameValue !== userData?.name || emailValue !== userData?.email || passValue) {
      setBtnVisible(true);
    } else {
      setBtnVisible(false);
    }
  }, [nameValue, emailValue, passValue, userData?.name, userData?.email]);

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidEmail(emailValue)) {
      return alert('Неверный формат Email');
    } else if (!isValidName(nameValue)) {
      return alert('Имя должно быть от 3-х символов');
    } else if (!isValidPassword(passValue) && passValue) {
      return alert('Пароль должен быть от 6-ти символов');
    } else {
      dispatch(editUser({ name: nameValue, email: emailValue, password: passValue }));
    }
  };

  const handleSettingCancel = () => {
    setNameValue(userData!.name);
    setEmailValue(userData!.email);
    setPassValue('');
  };

  return (
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
          <Button onClick={handleSettingCancel} htmlType="button">
            Отмена
          </Button>
        </div>
      ) : (
        <></>
      )}
    </form>
  );
};

export default ProfilePage;
