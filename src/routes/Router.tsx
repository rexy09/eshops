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
import ShopLayout from "../common/layouts/ShopLayout";
import HomePage from "../pages/shop/HomePage";
import CartPage from "../pages/shop/CartPage";
import ProductPage from "../pages/shop/ProductPage";
import ProductDetailsPage from "../pages/shop/ProductDetailsPage";



export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ShopLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route
          path="/product_details/:id"
          element={<ProductDetailsPage />}
        />
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
