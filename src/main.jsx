import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "@mui/material";
import "./index.css";
import customTheme from "./theme.js";
import App from "./App.jsx";
import JazzLayout from "./components/pages/jazz/JazzLayout.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Codes from "./components/pages/Codes.jsx";
import Love from "./components/pages/Love.jsx";
import  Music from "./components/pages/jazz/Music.jsx";
import Dance from "./components/pages/jazz/Dance.jsx";
import Sirens from "./components/pages/jazz/Sirens.jsx";

import Gorgon from "./components/pages/jazz/Gorgon.jsx";

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
      {
        path: "jazz",
        element: <JazzLayout />, // Parent layout for /jazz/*
        children: [

          // 1. MUSIC ROUTE (No children, is a terminal route)
          {
            path: "music", // Renders at /jazz/music
            element: <Music />,
          },

          // 2. DANCE ROUTE (No children, is a terminal route)
          {
            path: "dance", // Renders at /jazz/dance
            element: <Dance />,
          },

          // 3. Optional: JAZZ INDEX ROUTE
          // This route renders when the path is exactly /jazz.
          // If you remove this, navigating to /jazz will show a blank screen
          // (because JazzLayout has nothing to render in its Outlet).
          {
            index: true,
            element: <div>Welcome to the Jazz Hub! Choose Music or Dance.</div>
          }
        ],
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
