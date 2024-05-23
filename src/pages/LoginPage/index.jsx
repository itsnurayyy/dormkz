import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@redux/slices/userSlice";
import axiosInstance from "@services/axios";
import Loader from "@components/Loader";
import { HOME_PAGE_ROUTE, REGISTER_PAGE_ROUTE } from "@utils/consts";
import styles from "./LoginPage.module.scss";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function loginUser(e) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await axiosInstance.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      dispatch(login(res.data));
      navigate(HOME_PAGE_ROUTE);
    } catch (error) {
      setError("Error!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={loginUser}>
        <h2 className={styles.title}>Login</h2>
        <input
          type="email"
          className={styles.input}
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.btn}>
          {isLoading ? <Loader /> : <p>Login</p>}
        </button>
        {error && <p className={styles.error}>{error}</p>}
        <p className={styles.link}>
          Don't have an account? <Link to={REGISTER_PAGE_ROUTE}>Register</Link>
        </p>
      </form>
    </div>
  );
}
