import AddAToy from "../Pages/AddAToy/AddAToy";
import AllToys from "../Pages/AllToys/AllToys";
import Blog from "../Pages/Blog/Blog";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import MyToys from "../Pages/MyToys/MyToys";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MainLayout from "../layouts/MainLayout";

import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ToyUpdate from "../Pages/ToyUpdate/ToyUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "blogs",
        element: <Blog></Blog>,
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://b7a11-toy-marketplace-server-side-lbtoha.vercel.app/totalToys"),
      },
      {
        path: "detail/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-lbtoha.vercel.app/detail/${params.id}`),
      },
      {
        path: "add",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },

      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <ToyUpdate></ToyUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-lbtoha.vercel.app/updateToy/${params.id}`),
      },
    ],
  },
]);

export default router;
