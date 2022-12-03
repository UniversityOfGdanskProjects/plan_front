import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Calendar from '../components/Calendar'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Calendar/>
      },
      {
        path: "aktualnosci",
        element: (<div>Aktualnosci</div>)
      },
      {
        path: "profil",
        element: (<div> Profil </div>)
      }
    ],
  },
]);
