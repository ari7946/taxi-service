import type { NextPage } from 'next';
import Head from 'next/head';
import { BookContainer } from '../features/book/container/book.container';
import NavbarContainer from '../features/navbar';

const BookPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Book</title>
        <meta name="description" content="Book a taxi - Get an instant estimate!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarContainer />
      <BookContainer />
    </div>
  );
};

export default BookPage;
