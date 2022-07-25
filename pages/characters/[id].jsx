/* eslint-disable @next/next/no-img-element */
import { getCharacter, getCharacters } from "../../src/services/api/characters";
import styles from "./[id].module.css";
import Head from "next/head";

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  const character = await getCharacter(id);

  return {
    props: {
      character,
    },
  };
}

export async function getStaticPaths() {
  const characters = await getCharacters();

  const paths = characters.map((character) => {
    return {
      params: {
        id: `${character.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Character({ character }) {
  const { fullName, title, family, imageUrl } = character;

  return (
    <>
      <Head>
        <title>{fullName}</title>
      </Head>

      <div className={styles["container"]}>
        <div className={styles["card"]}>
          <img
            className={styles["card--image"]}
            src={imageUrl}
            alt={fullName}
          />
          <h2 className={styles["card--name"]}>{fullName}</h2>
          <p className={styles["card--title"]}>
            Título:
            <span className={styles["card--span"]}>{title}</span>
          </p>
          <p className={styles["card--family"]}>
            Família
            <span className={styles["card--span"]}>{family}</span>
          </p>
        </div>
      </div>
    </>
  );
}
