import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Page Imports
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contacts from "./pages/Contacts";


function App() {
  // Define the routes and their corresponding components
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />, // Directly using the component, no need for extra JSX fragments
    },
    {
      path: "/about",
      element: <About />, // Same as above, no need for unnecessary wrappers
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/contacts",
      element: <Contacts />,
    },
  ]);

  return (
    <>
 
      <RouterProvider router={router} />
     
    </>
  );
}

export default App;
