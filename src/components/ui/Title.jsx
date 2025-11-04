import styles from "../../styles/UI.module.css";

const Title = ({ level = 3, title, description }) => {
  const Tag = `h${level}`;

  return (
    <div className={styles.container}>
      <Tag className={styles.title}>{title}</Tag>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default Title;
