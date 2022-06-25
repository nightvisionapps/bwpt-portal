import Image from 'next/image';
import styles from './CatCard.module.css';

export interface ICatCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const CatCard: React.FC<ICatCard> = ({ tag, title, body, author, time }) => {
  const srcGuy = `https://i.pravatar.cc/40?img=3`;
  const srcCat = '/time-cat.jpg';
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            loader={() => srcCat}
            src={srcCat}
            width={600}
            height={400}
            alt="card__image"
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <Image
              loader={() => srcGuy}
              src={srcGuy}
              width={40}
              height={40}
              alt="user__image"
              className={styles.user__image}
            />
            <div className={styles.user__info}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
