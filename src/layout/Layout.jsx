import React from "react";

import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
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
      <NavBar />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};
