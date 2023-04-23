import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assests/Css/index.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
    },
    {
        path:'/about',
        element:<div>This is about page</div>
    }
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} />);

