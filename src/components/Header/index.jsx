import Link from "next/link";
import Navbar from "../Navbar";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <h1>
        <Link href="/">
          <a>GOTH Wiki</a>
        </Link>
      </h1>
      <Navbar />
    </header>
  );
}
