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
import Navbar from "./components/Navbar.tsx";
import Home from "./routes/Home/Home.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import HomeLayout from "./layouts/HomeLayout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  errorElement={<ErrorPage />} >
      <Route element={<HomeLayout />} >
        <Route element={<Home />} path="/" />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-up/verify-otp" element={<VerifyOtp />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
