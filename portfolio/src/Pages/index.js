import Portfolio from "./Portfolio/Portfolio.jsx";
import MainLayout from "../Layouts/MainLayout/MainLayout.jsx"
import IndexLayout from "../Layouts/IndexLayout/IndexLayout.jsx";
import Home from "./Home/Home.jsx";


import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      { path: "/", element: <Home /> }
    ],
  },{
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/portfolio", element: <Portfolio /> }
    ],
  },
]);