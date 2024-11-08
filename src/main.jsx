import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import AuthProvider from "./Pages/Provider/AuthProvider";
import { ServiceProvider } from "./Pages/Provider/ServiceProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ServiceProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ServiceProvider>
  </StrictMode>
);
