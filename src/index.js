import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

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
