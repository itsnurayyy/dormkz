import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "@services/axios";
import Loader from "@components/Loader";
import { ADMIN_DORMITORIES_PAGE_ROUTE, CREATE_DORMITORY_PAGE_ROUTE } from "@utils/consts";
import styles from "./AdminDormitoriesPage.module.scss";

export default function AdminDormitoriesPage() {
  const [dormitories, setDormitories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDormitories() {
      setIsLoading(true);
      try {
        const res = await axiosInstance.get("/dorm");
        setDormitories(res.data);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDormitories();
  }, []);

  async function deleteDorm(e, id) {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axiosInstance.delete(`/dorm/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      setDormitories(dormitories.filter((item) => item._id !== id));
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dormitories list</h1>
        <Link to={CREATE_DORMITORY_PAGE_ROUTE} className={styles.btn}>
          Create
        </Link>
      </div>
      <div className={styles.content}>
        {isLoading ? (
          <Loader isRed={true} />
        ) : (
          <div className={styles.grid}>
            {dormitories.map((dorm) => (
              <div className={styles.item} key={dorm._id}>
                <div className={styles.img}>
                  <img src={dorm.previewImageUrl} alt={dorm.name} />
                </div>
                <div className={styles.block}>
                  <h2>{dorm.name}</h2>
                  <p>{dorm.description}</p>
                  <div className={styles.buttons}>
                    <Link
                      to={ADMIN_DORMITORIES_PAGE_ROUTE + "/" + dorm.slug}
                      className={styles.btn}>
                      Edit
                    </Link>
                    <button
                      type="submit"
                      className={styles.btn}
                      onClick={(e) => deleteDorm(e, dorm._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
