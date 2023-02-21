import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";

const router = createBrowserRouter([
  {
    path: "/menu",
    element: <Menu />,
    children: [
      {
        path: "/menu/:table",
        element: <Menu />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
    children: [
      {
        path: "/cart/:table",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/order",
    element: <Order />,
    children: [
      {
        path: "/order/:table",
        element: <Order />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
