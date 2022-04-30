import Head from "next/head";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Gabriele Napoli Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gabriele Napoli</title>
      </Head>
      <Navbar />
      <main className="w-100 lg:w-140 px-5 lg:px-0 m-auto">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
