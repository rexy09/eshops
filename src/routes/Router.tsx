import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import AuthLayout from "../common/layouts/AuthLayout";
import DashboardLayout from "../common/layouts/DashboardLayout";
import LoginPage from "../pages/auth/LoginPage";
import SignUpPage from "../pages/auth/SignUpPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import InventoryPage from "../pages/dashboard/InventoryPage";
import { NotFound } from "../pages/NotFound";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        {/* <Route index element={<Home />} /> */}
        <Route element={<AuthLayout />}>
          <Route index element={<SignUpPage />} />
        </Route>
        
      </Route>
      <Route
        element={
          // <RequireAuth loginPath={"/login"}>
            <DashboardLayout />
          // </RequireAuth>
        }
        // errorElement={<ServerError />}
      >
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);
