import SideNav from "./SideNav/SideNav";
import styles from "./Layout.module.css";
import MainNav from "./MainNav/MainNav";

const Layout = (props: any) => {
  return (
    <>
      <SideNav />

      <main className={styles.main}>
        <>
          <MainNav />
        </>
      </main>
    </>
  );
};

export default Layout;
