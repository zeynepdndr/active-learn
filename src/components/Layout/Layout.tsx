import SideNav from "./SideNav/SideNav";
import styles from "./Layout.module.css";

const Layout = (props: any) => {
  return (
    <>
      <SideNav />
      <main className={styles.main}>{props.children}</main>
    </>
  );
};

export default Layout;
