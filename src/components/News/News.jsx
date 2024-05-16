import styles from './News.module.css'
import { useSelector } from 'react-redux';

const News = () => {
  const data  = useSelector(state => state.news);

  return(
    <div className={styles.container}>
      {data && data.map((item) => {
        return(
          <div className={styles.news} key={item.title}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.content}>{item.content}</div>
            <div className={styles.date}>{item.date}</div>
          </div>
        )
      })}
    </div>
  );
}

export default News;