import { useEffect, useState } from "react";
import Loader from "@components/Loader";
import axiosInstance from "@services/axios";
import styles from "./AdminUsersPage.module.scss";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      try {
        const res = await axiosInstance.get("/user", {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });
        setUsers(res.data);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users list</h1>
      <div className={styles.content}>
        {isLoading ? (
          <Loader isRed={true} />
        ) : (
          <div className={styles.list}>
            {users
              .filter((item) => item.role !== "admin")
              .map((user, index) => (
                <div className={styles.item}>
                  <div>{index + 1}</div>
                  <div>
                    {user.firstName} {user.lastName}
                  </div>
                  <div>{user.email}</div>
                  <div>{user.role}</div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
