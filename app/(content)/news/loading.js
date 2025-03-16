import styles from './loading.module.css'

export default function LoadingPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className='news-list'>
        {Array.from({ length: 6 }, (_, index) => (
          <li 
            key={index} 
            className={styles.card}
            aria-busy="true"
            aria-label="Loading news item"
          >
            <div className={`${styles["card__skeleton"]} ${styles["card__description"]}`}></div>
            <div className={`${styles["card__skeleton"]} ${styles["card__title"]}`}></div>
          </li>
        ))}
      </ul>
    </>
  );
}