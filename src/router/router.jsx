import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Calendar from '../components/Calendar'
import Lecturer from "../components/Lecturer";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Calendar />} />
      <Route path="lecturer" element={<Lecturer />} />
    </Route>
  )
);
