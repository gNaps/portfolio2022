import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Gabriele Napoli Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <title>Gabriele Napoli</title>
      </Head>
      <Navbar />
      <main className="h-full w-100 md:w-140 px-5 md:px-0 mx-auto">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
