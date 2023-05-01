import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from '../layout/layout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    },
  ]);


export default router;