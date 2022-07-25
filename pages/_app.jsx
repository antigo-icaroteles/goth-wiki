import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
}

export default MyApp;
