import SecondaryButton from "./buttons/SecondaryButton";
import Input from "./Input";
import styles from "../styles/Signup.module.scss";
import PrimaryButton from "./buttons/PrimaryButton";

const Signup = () => {
  return (
    <div className={styles.container}>
      <h1 className="heading-1 mb-small">Sign up</h1>
      <SecondaryButton name="Sign up with Google" />
      <h3 className="mb-small">or</h3>
      <form>
        <Input label="name" type="text" />
        <Input label="Email" type="email" />
        <Input label="password" type="password" />
        <Input label="confirm password" type="password" />
        <PrimaryButton name="Create account" />
      </form>
    </div>
  );
};

export default Signup;
