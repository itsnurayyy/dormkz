import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@redux/slices/userSlice";
import {
  ADMIN_DORMITORIES_PAGE_ROUTE,
  ADMIN_USERS_PAGE_ROUTE,
  HOME_PAGE_ROUTE
} from "@utils/consts";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigateTo(HOME_PAGE_ROUTE);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.part}>
        <Link to={HOME_PAGE_ROUTE} className={styles.logo}>
          LOGO
        </Link>
        <div>
          <Link to={ADMIN_USERS_PAGE_ROUTE} className={styles.link}>
            Users
          </Link>
          <Link to={ADMIN_DORMITORIES_PAGE_ROUTE} className={styles.link}>
            Dormitories
          </Link>
        </div>
      </div>
      <div className={styles.part}>
        <div className={styles.link} onClick={logOut}>
          Log out
        </div>
      </div>
    </div>
  );
}
