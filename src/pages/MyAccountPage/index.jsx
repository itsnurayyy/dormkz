import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@redux/slices/userSlice";
import { HOME_PAGE_ROUTE } from "@utils/consts";

export default function MyAccountPage() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  function logOut() {
    localStorage.removeItem("token");
    dispatch(logout());
    navigateTo(HOME_PAGE_ROUTE);
  }

  return (
    <div>
      <h2>
        First name: <b>{user.firstName}</b>
      </h2>
      <h2>
        Last name: <b>{user.lastName}</b>
      </h2>
      <h2>
        E-mail: <b>{user.email}</b>
      </h2>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}
