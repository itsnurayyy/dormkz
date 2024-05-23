import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "@services/axios";
import Loader from "@components/Loader";
import { ADMIN_DORMITORIES_PAGE_ROUTE } from "@utils/consts";
import styles from "./CreateDormitoryPage.module.scss";

export default function CreateDormitoryPage() {
  const [isLoading, setIsLoading] = useState(false);
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
  const [preview, setPreview] = useState(null);
  const [images, setImages] = useState([]);
  const [isHostel, setIsHostel] = useState(false);

  const navigateTo = useNavigate();

  function handlePreviewImage(e) {
    setPreview(e.target.files[0]);
  }

  function handleOtherImages(e) {
    setImages((prevImages) => [...prevImages, ...e.target.files]);
  }

  async function createDorm(e) {
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
      !city ||
      !preview ||
      images.length === 0
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("slug", slug);
      formData.append("name", name);
      formData.append("workEmail", workEmail);
      formData.append("phoneNumber", phoneNumber);
      formData.append("description", description);
      formData.append("price", +price);
      formData.append("size", +size);
      formData.append("capacity", +capacity);
      formData.append("city", city);
      formData.append("location", location);
      formData.append("extras", extras);
      formData.append("isHostel", false);
      formData.append("hasTelevision", hasTelevision);
      formData.append("hasWiFi", hasWiFi);
      formData.append("hasWasher", hasWasher);
      formData.append("hasBalcony", hasBalcony);
      formData.append("hasCleaner", hasCleaner);
      formData.append("hasRadio", hasRadio);
      formData.append("hasLift", hasLift);
      formData.append("hasDailyCleaner", hasDailyCleaner);
      formData.append("preview", preview);
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      await axiosInstance.post("/dorm", formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data"
        }
      });
      navigateTo(ADMIN_DORMITORIES_PAGE_ROUTE);
    } catch (error) {
      console.log("Error", error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Link to={ADMIN_DORMITORIES_PAGE_ROUTE} className={styles.back}>
          {"<- Back"}
        </Link>
        <h1 className={styles.title}>Create dorm</h1>
      </div>
      <form className={styles.block} onSubmit={createDorm}>
        <div className={styles.form}>
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
              <input
                type="checkbox"
                onChange={() => setHasWasher(!hasWasher)}
                checked={hasWasher}
              />
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
            {isLoading ? <Loader /> : <p>Create</p>}
          </button>
        </div>
        <div>
          <p className={styles.label}>Is Hostel?</p>
          <div className={styles.hostel}>
            <input type="checkbox" onChange={() => setIsHostel(!isHostel)} checked={isHostel} />
            <p>isHostel</p>
          </div>
          <p className={styles.label}>Upload image</p>
          <input type="file" id="file" onChange={handlePreviewImage} className={styles.file} />
          <label htmlFor="file" className={styles.btn}>
            Upload preview image
          </label>
          {preview && (
            <>
              <p className={styles.label}>Image Preview</p>
              <img src={URL.createObjectURL(preview)} className={styles.preview} />
            </>
          )}
          <p className={styles.label}>Upload images</p>
          <input
            type="file"
            id="files"
            multiple
            onChange={handleOtherImages}
            className={styles.file}
          />
          <label htmlFor="files" className={styles.btn}>
            Upload other images
          </label>
          {images.length !== 0 && (
            <>
              <p className={styles.label}>Other images</p>
              <div className={styles.images}>
                {images.map((img) => (
                  <img src={URL.createObjectURL(img)} className={styles.preview} />
                ))}
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
