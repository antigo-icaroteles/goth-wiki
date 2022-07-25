import styles from "./index.module.css";

export default function Main({ children }) {
  return <main className={styles["container"]}>{children}</main>;
}
