import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Home from "./pages/Home";
import AlcoholQuiz from "./pages/AlcoholQuiz";
import HomePage from "./pages/HomePage";
import TransForm from "./pages/Transform";
import Games from "./pages/Games";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";

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
  {
    path: "/games",
    element: <Games />,
  },
  {
    path: "/games/game1",
    element: <Game1 />,
  },
  {
    path: "/games/game2",
    element: <Game2 />,
  },
  {
    path: "/games/game3",
    element: <Game3 />,
  },
  {
    path: "/kitchen",
    element: <Management />,
  },
  {
    path: "/table",
    element: <Table />,
    children: [
      {
        path: "/table/:id",
        element: <Table />,
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
