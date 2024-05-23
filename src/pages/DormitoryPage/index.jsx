import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Loader from "@components/Loader";
import axiosInstance from "@services/axios";
import styles from "./DormitoryPage.module.scss";
import useAuth from "@hooks/useAuth";

export default function DormitoryPage() {
  const { isAuth } = useAuth();
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [dorm, setDorm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");
  const [room, setRoom] = useState(0);
  const [location, setLocation] = useState(0);
  const [building, setBuilding] = useState(0);
  const [bathroom, setBathroom] = useState(0);

  async function fetchDorm() {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get(`/dorm/${slug}`);
      setDorm(res.data);
      setReviews(res.data.reviews);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function addReview(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const reviewData = { comment, rate: { room, location, building, bathroom } };
      await axiosInstance.post(`/review/${dorm._id}`, reviewData, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      fetchDorm();
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useState(() => {
    fetchDorm();
  }, [slug]);

  if (isLoading) {
    return <Loader isRed={true} />;
  }

  return (
    <div>
      <img src={dorm.previewImageUrl} alt={dorm.name} className={styles.img} />
      <h2 className={styles.title}>{dorm.name}</h2>
      <p className={styles.description}>{dorm.description}</p>
      {isAuth && (
        <form onSubmit={addReview}>
          <h3 className={styles.subtitle}>Add review</h3>
          <textarea
            type="text"
            className={styles.input}
            placeholder="Enter your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className={styles.rates}>
            <div className={styles.rate}>
              <p>Room</p>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((item, index) => (
                  <FaStar
                    className={room > index ? styles.active : ""}
                    onClick={() => setRoom(index + 1)}
                  />
                ))}
              </div>
            </div>
            <div className={styles.rate}>
              <p>Location</p>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((item, index) => (
                  <FaStar
                    className={location > index ? styles.active : ""}
                    onClick={() => setLocation(index + 1)}
                  />
                ))}
              </div>
            </div>
            <div className={styles.rate}>
              <p>Building</p>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((item, index) => (
                  <FaStar
                    className={building > index ? styles.active : ""}
                    onClick={() => setBuilding(index + 1)}
                  />
                ))}
              </div>
            </div>
            <div className={styles.rate}>
              <p>Bathroom</p>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((item, index) => (
                  <FaStar
                    className={bathroom > index ? styles.active : ""}
                    onClick={() => setBathroom(index + 1)}
                  />
                ))}
              </div>
            </div>
          </div>
          <button type="submit" className={styles.btn}>
            Add review
          </button>
        </form>
      )}
      {reviews && (
        <div>
          <h3 className={styles.subtitle}>Reviews</h3>
          <div className={styles.reviews}>
            {reviews.map((item) => (
              <div className={styles.review}>
                <h4>
                  {item.userId.firstName} {item.userId.lastName}
                </h4>
                <h6>{item.comment}</h6>
                <p>Room: {item.rate.room}/5</p>
                <p>Location: {item.rate.location}/5</p>
                <p>Building: {item.rate.building}/5</p>
                <p>Bathroom: {item.rate.bathroom}/5</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
