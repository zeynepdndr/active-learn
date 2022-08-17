import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./SideNav.module.css";

const SideNav: React.FC<any> = (props) => {
  return (
    <header>
      <div className={styles["header-left"]}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to={"/popular"}>Popular</Link>
            </li>
            <li>
              <Link to={"/popular"}>Latest</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.logo}>
        <Link to={"/"}>
          {/*  */}
          Bookers
        </Link>
      </div>
      <div className={styles["header-right"]}>
        {true && (
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li></li>
              <li>
                <Button className={styles.logout}>Logout</Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default SideNav;
