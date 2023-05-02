import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ChefDetails from "../pages/OurChef/ChefDetails";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({params}) =>
          fetch(
            `https://flaver-server-habibullahraju.vercel.app/all-chef/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ],
  },
]);

export default router;
