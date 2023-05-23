import React from "react";
import Layout from "../components/Layout";
// import "../styles/globals.css";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
