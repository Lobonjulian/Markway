import styles from "@styles/UI.module.css";
import Title from "./Title";

const Card = ({ title, image, description }) => {
  return (
    <div className={styles.card}>
      {image && (
        <img
          src={image}
          alt={title}
          className={styles.cardImage}
          loading="lazy"
        />
      )}
      {title && <Title title={title} description={description} />}
    </div>
  );
};

export default Card;
