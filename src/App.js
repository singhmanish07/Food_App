import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js"; // Default import
import Body from "./components/Body.js"; // Default import

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "./components/About.js";
import Contact from "./components/contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Grocery Page is Loading...</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
