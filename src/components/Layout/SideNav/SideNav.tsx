import { useContext } from "react";
// import AuthContext from "../../../store/auth-context";
// import HeaderFavoriteButton from "../HeaderFavoriteButton/HeaderFavoriteButton";
// import styles from "./SideNav.module.css";

const SideNav = (props: any) => {
  // const ctx = useContext(AuthContext);

  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <a href={"/popular"}>Popular</a>
            </li>
            <li>
              <a href={"/popular"}>Latest</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <a href={"/"}>
          {/*  */}
          Bookers
        </a>
      </div>
      <div>
        {true && (
          <nav>
            <ul>
              <li>
                <a href={"/profile"}>Profile</a>
              </li>
              <li>{/* <HeaderFavoriteButton onClick={props.onClick} /> */}</li>
              <li></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default SideNav;
