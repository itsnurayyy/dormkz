import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "@services/axios";
import Loader from "@components/Loader";
import { ADMIN_DORMITORIES_PAGE_ROUTE } from "@utils/consts";
import { ensureBoolean } from "@utils/utils";
import styles from "./EditDormitoryPage.module.scss";

export default function EditDormitoryPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [dorm, setDorm] = useState(null);

  useEffect(() => {
    async function fetchDorm() {
      setIsLoading(true);
      try {
        const res = await axiosInstance.get(`/dorm/${id}`);
        setDorm(res.data);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDorm();
  }, [id]);

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [extras, setExtras] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [hasTelevision, setHasTelevison] = useState(false);
  const [hasWiFi, setHasWiFi] = useState(false);
  const [hasWasher, setHasWasher] = useState(false);
  const [hasBalcony, setHasBalcony] = useState(false);
  const [hasCleaner, setHasCleaner] = useState(false);
  const [hasRadio, setHasRadio] = useState(false);
  const [hasLift, setHasLift] = useState(false);
  const [hasDailyCleaner, setHasDailyCleaner] = useState(false);

  useEffect(() => {
    if (dorm) {
      setName(dorm.name);
      setSlug(dorm.slug);
      setDescription(dorm.description);
      setPrice(+dorm.price);
      setSize(+dorm.size);
      setCapacity(+dorm.capacity);
      setExtras(dorm.extras.join(";"));
      setWorkEmail(dorm.workEmail);
      setPhoneNumber(dorm.phoneNumber);
      setLocation(dorm.location);
      setCity(dorm.city);
      setHasTelevison(ensureBoolean(dorm.amenties.hasTelevision));
      setHasWiFi(ensureBoolean(dorm.amenties.hasWiFi));
      setHasWasher(ensureBoolean(dorm.amenties.hasWasher));
      setHasBalcony(ensureBoolean(dorm.amenties.hasBalcony));
      setHasCleaner(ensureBoolean(dorm.amenties.hasCleaner));
      setHasRadio(ensureBoolean(dorm.amenties.hasRadio));
      setHasLift(ensureBoolean(dorm.amenties.hasLift));
      setHasDailyCleaner(ensureBoolean(dorm.amenties.hasDailyCleaner));
    }
  }, [dorm]);

  const navigateTo = useNavigate();

  async function updateDorm(e) {
    e.preventDefault();

    if (
      !name ||
      !slug ||
      !description ||
      !price ||
      !size ||
      !capacity ||
      !workEmail ||
      !phoneNumber ||
      !location ||
      !city
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setIsLoading(true);
      await axiosInstance.patch(
        `/dorm/${id}`,
        {
          slug,
          name,
          workEmail,
          phoneNumber,
          description,
          price,
          size,
          capacity,
          city,
          location,
          extras,
          hasTelevision,
          hasWiFi,
          hasWasher,
          hasBalcony,
          hasCleaner,
          hasRadio,
          hasLift,
          hasDailyCleaner
        },
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      );
      navigateTo(ADMIN_DORMITORIES_PAGE_ROUTE);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <Loader isRed={true} />;
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Link to={ADMIN_DORMITORIES_PAGE_ROUTE} className={styles.back}>
          {"<- Back"}
        </Link>
        <h1 className={styles.title}>Create dorm</h1>
      </div>
      <form className={styles.block} onSubmit={updateDorm}>
        <p className={styles.label}>Name</p>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter dorm's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className={styles.label}>Slug</p>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter dorm's slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <p className={styles.label}>Description</p>
        <textarea
          type="text"
          className={styles.input}
          placeholder="Enter dorm's description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>
        <p className={styles.label}>Price</p>
        <input
          type="number"
          className={styles.input}
          placeholder="Enter dorm's price"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />
        <p className={styles.label}>Size</p>
        <input
          type="number"
          className={styles.input}
          placeholder="Enter dorm's size"
          value={size}
          onChange={(e) => setSize(+e.target.value)}
        />
        <p className={styles.label}>Capacity</p>
        <input
          type="number"
          className={styles.input}
          placeholder="Enter dorm's capacity"
          value={capacity}
          onChange={(e) => setCapacity(+e.target.value)}
        />
        <p className={styles.label}>Extras</p>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter dorm's capacity"
          value={extras}
          onChange={(e) => setExtras(e.target.value)}
        />
        <p className={styles.label}>Work email</p>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter dorm's work email"
          value={workEmail}
          onChange={(e) => setWorkEmail(e.target.value)}
        />
        <p className={styles.label}>Phone number</p>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter dorm's phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <p className={styles.label}>Location</p>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter dorm's location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <p className={styles.label}>City</p>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter dorm's city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <p className={styles.label}>Amenties</p>
        <div className={styles.amenties}>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={() => setHasTelevison(!hasTelevision)}
              checked={hasTelevision}
            />
            <p>Television</p>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" onChange={() => setHasWiFi(!hasWiFi)} checked={hasWiFi} />
            <p>Wi-Fi</p>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" onChange={() => setHasWasher(!hasWasher)} checked={hasWasher} />
            <p>Washer</p>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={() => setHasBalcony(!hasBalcony)}
              checked={hasBalcony}
            />
            <p>Balcony</p>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={() => setHasCleaner(!hasCleaner)}
              checked={hasCleaner}
            />
            <p>Cleaner</p>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" onChange={() => setHasRadio(!hasRadio)} checked={hasRadio} />
            <p>Radio</p>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" onChange={() => setHasLift(!hasLift)} checked={hasLift} />
            <p>Lift</p>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={() => setHasDailyCleaner(!hasDailyCleaner)}
              checked={hasDailyCleaner}
            />
            <p>Daily Cleaner</p>
          </div>
        </div>
        <button type="submit" className={styles.btn}>
          {isLoading ? <Loader /> : <p>Update</p>}
        </button>
      </form>
    </div>
  );
}
