import styles from "./index.module.css";
import Head from "next/head";

function NotFound() {
  return (
    <>
      <Head>
        <title>404: Not Found</title>
      </Head>
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
