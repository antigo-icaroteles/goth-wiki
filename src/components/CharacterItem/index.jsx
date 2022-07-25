/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.css";
import Link from "next/link";

export default function CharacterItem({ character }) {
  const { fullName, imageUrl, id } = character;
  return (
    <Link href={`/characters/${id}`}>
      <li className={styles["item"]}>
        <img src={imageUrl} alt={fullName} />
        <h3>{fullName}</h3>
      </li>
    </Link>
  );
}
