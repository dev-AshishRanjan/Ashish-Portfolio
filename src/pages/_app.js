import "@/styles/globals.scss";
import Layout from "@/style-guide/page-components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ASHISH Portfolio</title>
        <meta
          name="description"
          content="Portfolio website of Kumar Ashish Ranjan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ashish.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
