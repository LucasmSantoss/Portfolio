import Portfolio from "./Portfolio/Portfolio.jsx";
import MainLayout from "../Layouts/MainLayout/MainLayout.jsx";
import IndexLayout from "../Layouts/IndexLayout/IndexLayout.jsx";
import Home from "./Home/Home.jsx";

// import Recomendations from "./Recomendations/Recomendations.jsx";

import { createBrowserRouter } from "react-router-dom";
import Contact from "./Contact/Contact.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [{ path: "/", element: <Home /> },
   
    // { path: "/recomendations", element: <Recomendations /> },
    { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/portfolio", element: <Portfolio /> },
     
     
    ],
  },
]);
