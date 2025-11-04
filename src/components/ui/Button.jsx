import styles from "@styles/UI.module.css";

const Button = ({ children, onClick, variant = "btn--primary" }) => {
  const classBtn = `${styles.btn}  ${styles[variant]}`;
  return (
    <button className={classBtn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
