import Card from "../../UI/Card/Card";
import styles from "./WelcomeMessage.module.css";

const WelcomeMessage: React.FC<any> = (props) => {
  return (
    <Card className={styles.welcome}>
      <h1>Welcome back Ema</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Card>
  );
};

export default WelcomeMessage;
