import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Views/Dashboard";
import Root from "./Views/Root";
import Post from "./Views/Post";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<Dashboard/>
      },
      {
        path:"/post",
        element:<Post/>
      },
    ]
  },
 

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
