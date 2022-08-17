import styles from "./Button.module.css";

const Button: React.FC<any> = (props) => {
  return (
    <button
      className={`${styles.button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled || false}
    >
      {props.children}
    </button>
  );
};

export default Button;
