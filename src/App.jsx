import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router";
import Home from '../src/Component/Home'
import About from '../src/Component/About'
import Contact from "./Component/Contact";
import Mein from "./Mein";
export default function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Mein/>,
      children:[
         {
      path:'/',
      element:<Home/>
    },
    {
      path: '/about',
      element:<About/>
    },
    {
      path: '/contact',
      element:<Contact/>
    }
      ]
    }
   
  ])
  return (
   <RouterProvider router= {router}></RouterProvider>
  );
}


