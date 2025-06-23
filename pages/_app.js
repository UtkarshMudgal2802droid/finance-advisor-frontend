// pages/_app.js
import Head from "next/head";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";

let theme = createTheme({
  palette: {
    primary: {
      main: "#2a3eb1",
    },
    secondary: {
      main: "#00acc1",
    },
    background: {
      default: "#f4f7fe",
    },
  },
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body": {
          margin: 0,
          padding: 0,
          overflowX: "hidden", // ✅ stop scroll globally
          boxSizing: "border-box",
          backgroundColor: "#f4f7fe",
        },
        "*": {
          boxSizing: "inherit",
        },
        "#__next": {
          width: "100%",
          overflowX: "hidden", // ✅ Next.js wrapper
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Finance Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
