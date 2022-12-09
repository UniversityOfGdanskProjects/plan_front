import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Calendar from "../components/Calendar";
import WelcomePage from "../components/WelcomePage";
import SignupPage from "../components/SignupPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<WelcomePage />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="*" element={<div>404</div>} />
    </Route>
  )
);
