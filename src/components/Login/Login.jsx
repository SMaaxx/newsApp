import styles from './Login.module.css';
import {useNavigate} from 'react-router-dom';
import {getAuth} from '../../service/getAuth';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setAuth} from '../../store/actions';

const Login = () => {
  const [loginError, setLoginError] = useState(false);
  const [userData, setUserData] = useState({
    login: '',
    password: ''
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authButtonClickHandler = () => {
    const isAuthorized = getAuth(userData);

    if (isAuthorized) {
      dispatch(setAuth());
      navigate('/profile');

      return
    }
    setLoginError(true);
  }

  return(
    <div className={styles.container}>
      <div className={styles.title}>Авторизация</div>
      <div className={styles.content}>
        <input
          className={styles.input}
          onBlur={(e) => setUserData({...userData, login: e.target.value})}
          onChange={() => loginError && setLoginError(false)}
          placeholder={'Логин'}
          defaultValue={userData.login}
        />
        <input
          className={styles.input}
          onBlur={(e) => setUserData({...userData, password: e.target.value})}
          onChange={() => loginError && setLoginError(false)}
          placeholder={'Пароль'}
          type={'password'}
          defaultValue={userData.password}
        />
        {loginError && <div className={styles.error}>Имя пользователя или пароль введены не верно</div>}
        <div onClick={authButtonClickHandler} className={styles.auth}>Войти</div>
      </div>
    </div>
  );
}

export default Login;