import styles from "./Card.module.css";

const Card: React.FC<any> = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
