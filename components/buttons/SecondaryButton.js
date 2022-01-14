import styles from "../../styles/SecondaryButton.module.scss";

const SecondaryButton = ({ name }) => {
  return <button className={`${styles.btn} mb-small`}>{name}</button>;
};

export default SecondaryButton;
