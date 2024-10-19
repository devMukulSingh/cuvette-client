import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./routes/SignUp/SignUp.tsx";
import VerifyOtp from "./routes/VerifyOtp/VerifyOtp.tsx";
import Home from "./routes/Home/Home.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import HomeLayout from "./layouts/HomeLayout.tsx";
import { Toaster } from "react-hot-toast";
import CacheProvider from "./lib/CacheProvider.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.ts";
import { Provider } from "react-redux";
import PostJob from "./routes/PostJob/PostJob.tsx";
import Middleware from "./components/Middleware.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<HomeLayout />}>
        <Route
          element={
            <Middleware >
              {" "}
              <Home />{" "}
            </Middleware>
          }
          path="/"
        />
        <Route
          element={
            <Middleware>
              {" "}
              <PostJob />
            </Middleware>
          }
          path="/post-job"
        />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-up/verify-otp" element={<VerifyOtp />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CacheProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </PersistGate>
    </CacheProvider>
    <Toaster />
  </StrictMode>
);
