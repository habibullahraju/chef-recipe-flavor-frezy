import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from '../layout/layout';
import Home from '../pages/Home/Home';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        }
      ]
    },
  ]);


export default router;