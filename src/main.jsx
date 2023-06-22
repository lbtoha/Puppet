import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import "@fontsource/jost";
import "typeface-bubblegum-sans";
import AuthProvider from "./Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <div className="font-jost">
          <RouterProvider router={router}></RouterProvider>
        </div>
        <ToastContainer />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
