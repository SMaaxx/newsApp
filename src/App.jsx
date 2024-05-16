import styles from './App.module.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import MainPage from './components/MainPage/MainPage';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import {useEffect} from 'react';
import {fetchNews, setAuth} from './store/actions';
import {useDispatch} from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
    localStorage.getItem('authorized') === 'true' && dispatch(setAuth());
  }, [dispatch]);

  return(
    <BrowserRouter>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link to={'/'} className={styles.button}>Главная</Link>
          <Link to={'/news'} className={styles.button}>Новости</Link>
          <Link to={'/profile'} className={styles.button}>Профиль</Link>
        </div>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/news' element={<News />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;