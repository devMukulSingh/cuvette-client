import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
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
import SignIn from "./routes/SignIn/SignIn.tsx";
import VerifySignInOtp from "./routes/SignIn/VerifyOtp/VerifySignInOtp.tsx";
import AuthMiddleware from "./components/AuthMiddleware.tsx";
import Cookies from "js-cookie";
import { isAuth } from "./lib/utils.ts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={<HomeLayout />}
        loader={async ({ request }) => {
          const token = Cookies.get("token");
          console.log(token);
          if (!token || token === "") {
            return redirect("/sign-in");
          }
          const isAuthenticated = await isAuth(token);
          if (!isAuthenticated) return redirect("/sign-in");
          return null;
        }}
      >
        <Route element={<Home />} path="/" />
        <Route element={<PostJob />} path="/post-job" />
      </Route>

      <Route
        element={<AuthLayout />}
        loader={async ({ request }) => {
          const token = Cookies.get("token");
          if (token && token !== "") {
            const isAuthenticated = await isAuth(token);
            if (isAuthenticated) return redirect("/");
          }
          return null;
        }}
      >
        <Route path="/sign-up" element={<SignUp />}/>
          <Route path="sign-up/verify-otp" element={<VerifyOtp />} />


        <Route element={<SignIn />} path="/sign-in"/>
          <Route element={<VerifySignInOtp />} path="sign-in/verify-otp" />

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
