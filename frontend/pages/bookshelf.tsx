import type { NextPage } from "next";
import Layout from "../components/layoutapp/Layout";

const Bookshelf: NextPage<void> = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="page-title page-title-bookshelf">Bookshelf</h1>
        <p className="page-subtitle">
          Here are some of my favorite books I&#39;ve read and I recommend them
          to you.
        </p>
        <div className="gallery mt-10">
          <figure className="gallery__item gallery__item--1">
            <img
              src="books/bar-sotto-il-mare.jpeg"
              className="gallery__img"
              alt="Image 1"
            />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="books/different-season.jpeg"
              className="gallery__img"
              alt="Image 2"
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img
              src="books/no-rules.jpeg"
              className="gallery__img"
              alt="Image 3"
            />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img
              src="books/one-piece.jpeg"
              className="gallery__img"
              alt="Image 4"
            />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img
              src="books/barca-nel-bosco.jpeg"
              className="gallery__img"
              alt="Image 5"
            />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img
              src="books/sherlock-holmes.jpeg"
              className="gallery__img"
              alt="Image 6"
            />
          </figure>
          <figure className="gallery__item gallery__item--7">
            <img src="books/afoc.webp" className="gallery__img" alt="Image 6" />
          </figure>
          <figure className="gallery__item gallery__item--8">
            <img
              src="books/antifragile.jpeg"
              className="gallery__img"
              alt="Image 6"
            />
          </figure>
          <figure className="gallery__item gallery__item--9">
            <img
              src="books/harry-potter.jpeg"
              className="gallery__img"
              alt="Image 6"
            />
          </figure>
        </div>
      </div>
    </Layout>
  );
};

export default Bookshelf;
