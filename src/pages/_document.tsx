import { Html, Head, Main, NextScript } from "next/document";
import { Theme, useTheme } from "../context/ThemeProvider";

export default function Document() {
  const { theme } = useTheme();

  return (
    <Html
      className={`${theme === Theme.DARK ? "dark" : "light"}`}
      style={{
        colorScheme: theme === Theme.DARK ? "dark" : "light",
      }}
    >
      <Head />
      <title>Bluedit - Redit Clone</title>
      <meta name="description" content="Bluedit - Redit Clone" />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
