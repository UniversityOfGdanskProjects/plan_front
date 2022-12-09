import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Calendar from "../components/Calendar";
import WelcomePage from "../components/WelcomePage";
import YearSchedule from "../components/YearSchedule";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<WelcomePage />} />
      <Route path="kalendarz" element={<Calendar />} />
      <Route path="yearSchedule" element={<YearSchedule />} />
    </Route>
  )
);
