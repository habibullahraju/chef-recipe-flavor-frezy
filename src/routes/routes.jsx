import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from '../layout/layout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import ChefDetails from '../pages/OurChef/ChefDetails';

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
        },
        {
            path: '/all-chef/:id',
            element: <ChefDetails></ChefDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/all-chef/${params.id}`)
        }
      ]
    },
  ]);


export default router;