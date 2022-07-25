import Head from "next/head";
import Link from "next/link";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles["container"]}>
        <h2>Olá, essa é a Enciclopédia de Game Of Thrones</h2>

        <Link href="/characters">
          <button>
            <a>Ver Enciclopédia</a>
          </button>
        </Link>
      </div>
    </>
  );
}
