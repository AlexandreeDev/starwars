import { Html, Head, Main, NextScript } from "next/document";

import { getCssText } from "../styles";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="" type="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          rel="stylesheet"
        />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
