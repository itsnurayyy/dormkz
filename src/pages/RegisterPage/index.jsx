import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "@services/axios";
import Loader from "@components/Loader";
import { LOGIN_PAGE_ROUTE } from "@utils/consts";
import styles from "./RegisterPage.module.scss";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [isActivationState, setIsActivationState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function registerUser(e) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await axiosInstance.post("/auth/register", {
        firstName,
        lastName,
        email,
        password
      });
      setIsActivationState(true);
    } catch (error) {
      setError("Error!");
    } finally {
      setIsLoading(false);
    }
  }

  async function activateUser(e) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await axiosInstance.post("/auth/activate", {
        code
      });
      navigate(LOGIN_PAGE_ROUTE);
    } catch (error) {
      setError("Error!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={isActivationState ? activateUser : registerUser}>
        <h2 className={styles.title}>Register</h2>
        <input
          type="text"
          className={styles.input}
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
        {isActivationState && (
          <input
            type="text"
            className={styles.input}
            placeholder="Activation code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        )}
        <button type="submit" className={styles.btn}>
          {isLoading ? <Loader /> : <p>{isActivationState ? "Activate" : "Register"}</p>}
        </button>
        {error && <p className={styles.error}>{error}</p>}
        <p className={styles.link}>
          Already have an account? <Link to={LOGIN_PAGE_ROUTE}>Login</Link>
        </p>
      </form>
    </div>
  );
}
