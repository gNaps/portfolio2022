import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeContextProvider } from "../context/ThemeContext";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={"system"}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
