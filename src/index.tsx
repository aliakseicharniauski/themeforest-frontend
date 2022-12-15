import React from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./pages/Home/Home";
import { ThemeProvider } from "@mui/material/styles";

// import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";
import { CssBaseline } from "@mui/material";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {/* <GlobalStyles /> */}
    <Home />
  </ThemeProvider>
);

const container = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
