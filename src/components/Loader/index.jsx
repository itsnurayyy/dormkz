import styles from "./Loader.module.scss";

export default function Loader({ isFullPage, isRed }) {
  if (isFullPage) {
    return (
      <div className={styles.full}>
        <span></span>
      </div>
    );
  }

  if (isRed) {
    return (
      <div className={styles.red}>
        <span></span>
      </div>
    );
  }

  return <span className={styles.small}></span>;
}
