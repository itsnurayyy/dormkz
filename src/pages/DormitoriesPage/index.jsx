import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "@services/axios";
import Loader from "@components/Loader";
import { DORMITORIES_PAGE_ROUTE } from "@utils/consts";
import styles from "./DormitoriesPage.module.scss";

export default function DormitoriesPage() {
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

  return (
    <div>
      <h1 className={styles.title}>Dormitories</h1>
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
                <p>Overall rate: {dorm.overallRate}</p>
                <Link to={DORMITORIES_PAGE_ROUTE + "/" + dorm.slug} className={styles.btn}>
                  More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
