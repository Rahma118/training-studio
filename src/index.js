
import AboutPage from "./About/AboutPage"
import App from "./App";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Basket from "./BasketPage/Basket";
import Allshedules from "./Schedules/Allshedules"
import Allcontact from "./Contact/Allcontact"
import AllClasses from "./Classes/AllClasses";
import Cart from "./CartPage/Cart";





const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "about",
    element: <AboutPage/>,
  },
  {
    path: "basket",
    element: <Basket/>,
  },

 {
    path: "classes",
    element: <AllClasses/>,
  },

  {
    path: "Schedules",
    element: <Allshedules/>,
  },

  {
    path: "Contact",
    element: <Allcontact/>,
  },

  {
    path: "CartPage",
    element: <Cart/>
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);