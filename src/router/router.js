import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "aktualnosci",
    element: <div> Aktualnosci </div>,
  },
  {
    path: "profil",
    element: <div> Profil </div>,
  },
]);
