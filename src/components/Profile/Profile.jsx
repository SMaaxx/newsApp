import styles from './Profile.module.css';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const Profile = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.isAuth);
  const profile = useSelector(state => state.profile);

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth]);

  const profileFields = [
    {
      label: 'ФИО',
      value: profile.name
    },
    {
      label: 'Компания',
      value: profile.company
    },
    {
      label: 'Телефон',
      value: profile.phone
    }
  ]


  return(
    <div className={styles.container}>
      <div className={styles.title}>Профиль</div>
      {profileFields.map((item) => {
        return(
          <div className={styles.content} key={item.label}>
            <div className={styles.label}>{item.label}</div>
            <div className={styles.value}>{item.value}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Profile;