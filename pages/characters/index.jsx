import Head from "next/head";
import CharacterItem from "../../src/components/CharacterItem";
import { getCharacters } from "../../src/services/api/characters";
import styles from "./index.module.css";

export async function getStaticProps() {
  const characters = await getCharacters();

  return {
    props: {
      characters,
    },
  };
}

function Characters({ characters }) {
  return (
    <>
      <Head>
        <title>Personagens</title>
      </Head>
      <ul className={styles["list"]}>
        {characters.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </ul>
    </>
  );
}

export default Characters;
