import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Gabriele Napoli Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gabriele Napoli</title>
      </Head>
      <Navbar />
      <main className="w-140 m-auto">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
