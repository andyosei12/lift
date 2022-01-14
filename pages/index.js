import { useState } from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import WelcomeNote from "../components/WelcomeNote";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [login, setLogin] = useState(false);
  const toggleLoginHandler = () => {
    setLogin(!login);
  };
  return (
    <div className={styles.register}>
      <section className={styles["register-container"]}>
        <h1 className="mb-large logo">LiftApp</h1>
        {login ? <Signin /> : <Signup />}

        {login ? (
          <h2>
            Don&apos;t have an account?{" "}
            <span onClick={toggleLoginHandler}>Sign up</span>
          </h2>
        ) : (
          <h2>
            Already have an account?{" "}
            <span onClick={toggleLoginHandler}>Log in</span>
          </h2>
        )}
      </section>
      <WelcomeNote />
    </div>
  );
}
