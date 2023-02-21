import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Home from "./pages/Home";
import AlcoholQuiz from "./pages/AlcoholQuiz";
import HomePage from "./pages/HomePage";
import TransForm from "./pages/Transform";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
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
  {
    path: "/quizPage",
    element: <HomePage />,
  },
  {
    path: "/quizPage/transForm",
    element: <TransForm />,
  },
  {
    path: "/quizPage/transForm/alcoholQuiz",
    element: <AlcoholQuiz />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
