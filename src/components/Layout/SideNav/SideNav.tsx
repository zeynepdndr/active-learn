import { ExpandMore, NotificationsNone, Settings } from "@mui/icons-material";
import { Icon } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./SideNav.module.css";
import profile from "../../../asssets/profile.jpg";

const SideNav: React.FC<any> = (props) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Settings sx={{ color: "#8a8a8d", fontSize: 40 }} />
          </li>
          <li>
            <NotificationsNone sx={{ color: "#8a8a8d", fontSize: 40 }} />
          </li>
          <li>
            <img src={profile} />
          </li>
          <li>
            <p>Ema</p>
          </li>
          <li>
            <ExpandMore sx={{ color: "#8a8a8d", fontSize: 40 }} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SideNav;
