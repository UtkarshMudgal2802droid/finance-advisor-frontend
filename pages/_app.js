// _app.js
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Head from "next/head";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const theme = createTheme({
  palette: {
    primary: { main: "#2a3eb1" }, // or teal/blue blend
    secondary: { main: "#00acc1" },
  },
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Finance Dashboard</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
