import { useLocation } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import Navbar from "@components/Navbar";
import Loader from "@components/Loader";
import Sidebar from "@components/Sidebar";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  const location = useLocation();
  const { isLoading } = useAuth();
  const isAdminPanel = location.pathname.includes("admin");

  if (isLoading) {
    return <Loader isFullPage={true} />;
  }

  if (isAdminPanel) {
    return (
      <div className={styles.admin}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
    </>
  );
}
