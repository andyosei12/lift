import styles from "../../styles/PrimaryButton.module.scss";

const PrimaryButton = ({ name }) => {
  return <button className={`${styles.btn} mb-small`}>{name}</button>;
};

export default PrimaryButton;
