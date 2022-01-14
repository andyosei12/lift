import Image from "next/image";
import styles from "../styles/WelcomeNote.module.scss";

const WelcomeNote = () => {
  return (
    <div className={styles.welcome}>
      <h1 className="mb-medium">
        Welcome to <br /> our community
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida,
        purus at mattis luctus, turpis velit imperdiet libero, et imperdiet erat
        nunc sed dolor. In eu ligula lobortis ante iaculis lobortis a vel
        tortor.Praesent a ligula eu enim tincidunt dapibus id a diam.
        Pellentesque bibendum felis nec eleifend condimentum.
      </p>
      <div className={styles.members}>
        <div className={styles["members__image"]}>
          <Image src="/images/user-2.jpg" alt="user 1" width="30" height="30" />
        </div>
        <div className={styles["members__image"]}>
          <Image src="/images/user-3.jpg" alt="user 2" width="30" height="30" />
        </div>
        <div className={styles["members__image"]}>
          <Image src="/images/user-4.jpg" alt="user 3" width="30" height="30" />
        </div>
        <div className={styles["members__image"]}>
          <Image src="/images/user-5.jpg" alt="user 4" width="30" height="30" />
        </div>
        <h3>Join thousands of others gaining advice from other peers</h3>
      </div>
    </div>
  );
};

export default WelcomeNote;
