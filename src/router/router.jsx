import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Calendar from '../components/Calendar'
import AdminRoute from "../components/admin/AdminRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Calendar />} />
      <Route path="admin" element={<AdminRoute />} />
    </Route>
  )
);
