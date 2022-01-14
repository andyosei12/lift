import styles from "../styles/Input.module.scss";

const Input = ({ label, ...otherProps }) => {
  return (
    <div className={`${styles["input-group"]} mb-small`}>
      <label className={`${styles.label} mb-small-1`}>{label}</label>
      <input {...otherProps} />
    </div>
  );
};

export default Input;
