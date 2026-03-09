import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "@mui/material";
import "./index.css";
import customTheme from "./theme.js";
import App from "./App.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Codes from "./components/pages/Codes.jsx";
import Love from "./components/pages/Love.jsx";
import Art from "./components/pages/art/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      { path: "art",
        element: <Art />
      },
      {
        path: "code",
        element: <Codes />,
      },
      {
        path: "love",
        element: <Love />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
