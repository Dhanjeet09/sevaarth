import React, { useEffect } from "react";
import Script from "next/script";
import "../styles/globals.css";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export const metadata = {
  description: "Join us in making a difference!",
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Sevaarth</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T3TMZZFX');`,
        }}
      />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T3TMZZFX"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Toaster position="top-center" />
    </>
  );
}

export default MyApp;
