import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { GlobalStyles } from "@styles/globalStyles";
import { theme } from "@styles/theme";
import Home from "@pages/Home";
import Layout from "@сomponents/Layout";
import Services from "@pages/Services";
import Solutions from "@pages/Solutions";
import NotFound from "@pages/NotFound";
import ProtectedRoute from "@сomponents/ProtectedRoute";

// TODO: add authentication/authorization
const user = null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      {/* TODO: add authentication/authorization */}
      <Route element={<ProtectedRoute isAllowed={!!user} />}>
        <Route path="solutions" element={<Solutions />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

// TODO: wrap ErrorBoundary
const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles />
    <RouterProvider router={router} />
  </ThemeProvider>
);

const container = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<App />);
