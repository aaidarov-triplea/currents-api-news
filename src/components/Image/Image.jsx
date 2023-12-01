import styles from './styles.module.css'

const Image = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img className={styles.image} src={image} alt="news" /> : null }
    </div>
  );
};

export default Image;
