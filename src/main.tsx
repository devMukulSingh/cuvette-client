import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./routes/SignUp/SignUp.tsx";
import VerifyOtp from "./routes/VerifyOtp/VerifyOtp.tsx";
import ErrorPage from "./error-page.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />} element={<App />}>
      <Route path="sign-up" element={<SignUp />} />
      <Route path="sign-up/verify-otp" element={<VerifyOtp />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
