import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./router/Router.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
