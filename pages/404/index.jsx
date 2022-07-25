import styles from "./index.module.css";
function NotFound() {
  return (
    <>
      <h3 className={styles["notfound"]}>
        404
        <span className={styles["notfound--description"]}>
          Essa página não existe
        </span>
      </h3>
    </>
  );
}

export default NotFound;
