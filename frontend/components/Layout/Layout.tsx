import Head from "next/head";

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/pikachu.ico" />
        <meta name="description" content="Gabriele Napoli Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gabriele Napoli</title>
      </Head>
      <main className="w-96 min-h-screen">{props.children}</main>
    </>
  );
};

export default Layout;
