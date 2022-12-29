import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { books } from "../api/books.data";
import { BookshelfProps } from "../api/models/BookshelfProps";
import Layout from "../components/layoutapp/Layout";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      books: books,
    },
  };
};

const Bookshelf: NextPage<BookshelfProps> = ({ books }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="page-title page-title-bookshelf">Bookshelf</h1>
        <p className="page-subtitle">
          Here are some of my favorite books I&#39;ve read and I recommend them
          to you.
        </p>
        <div className="grid grid-cols-1 grid-cols-3 gap-4 mt-10">
          {books?.map((b) => (
            <Image
              key={b.title}
              src={b.url}
              alt={b.title}
              width={90}
              height={120}
              layout={"fixed"}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Bookshelf;
