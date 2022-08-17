import { ExpandMore, NotificationsNone } from "@mui/icons-material";
import { Icon } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./SideNav.module.css";

const SideNav: React.FC<any> = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li></li>
          <li>
            <Button className={styles.logout}>Logout</Button>
            <NotificationsNone sx={{ color: "#8a8a8d", fontSize: 40 }} />
            <ExpandMore sx={{ color: "#8a8a8d", fontSize: 40 }} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SideNav;
