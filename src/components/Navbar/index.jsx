import styles from "./index.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <nav className={styles["nav"]}>
      <ul className={styles["nav--list"]}>
        <li
          className={
            pathname === "/" ? styles["nav--item__active"] : styles["nav--item"]
          }
        >
          <Link href="/">
            <a className={styles["nav--link"]}>Home</a>
          </Link>
        </li>
        <li
          className={
            pathname === "/characters"
              ? styles["nav--item__active"]
              : styles["nav--item"]
          }
        >
          <Link href="/characters">
            <a className={styles["nav--link"]}>Personagens</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
