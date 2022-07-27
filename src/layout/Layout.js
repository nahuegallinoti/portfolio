import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";
import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Nahuel's Portfolio</title>
        <meta
          name="description"
          content="portfolio of Nahuel Gallinoti, a software developer based in Cordoba, Argentina"
        />
      </Head>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};
