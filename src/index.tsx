import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { GlobalStyles } from "@styles/globalStyles";
import { theme } from "@styles/theme";
import Home from "@pages/Home";
import Header from "@сomponents/Header";

// TODO: wrap ErrorBoundary
const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles />
    <Header />
    <Home /> {/* TODO: add routes, private routes */}
  </ThemeProvider>
);

const container = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<App />);
