import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Calendar from "./components/Calendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "aktualnosci",
        element: "Aktualnosci",
      },
      {
        path: "",
        element: <Calendar />,
      },
      {
        path: "profil",
        element: "Profil",
      },
    ],
  },
  {
    path: "/login",
    element: "Login",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
