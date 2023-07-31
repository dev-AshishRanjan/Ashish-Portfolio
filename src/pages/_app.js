import "@/styles/globals.scss";
import Layout from "@/style-guide/page-components/Layout";
import Head from "next/head";

// umcomment to use cfour font
// import localFont from "next/font/local";
// const myFont = localFont({
//   src: [
//     {
//       path: "../../public/fonts/cfour/Cfour.otf",
//       weight: "400",
//     },
//   ],
// });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ASHISH Portfolio</title>
        <meta
          name="description"
          content="Portfolio website of Kumar Ashish Ranjan"
        />
        <meta
          name="keywords"
          content="kumar, ashish, ranjan, portfolio,NITS, web dev"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5f5eaa" />
        <link rel="icon" href="/ashish.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/ashish_sm.png" />
        <link rel="apple-touch-icon" href="/ashish_sm.png"></link>
      </Head>
      {/* <style jsx global>{`
        * {
          font-family: ${myFont.style.fontFamily};
        }
      `}</style> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
