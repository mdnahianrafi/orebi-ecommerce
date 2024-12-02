import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop";
import Header from "./components/layouts/Header";
import About from "./pages/About";
import Footer from "./components/layouts/Footer";
import Contacts from "./pages/Contacts";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {" "}
          <Home />{" "}
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <div>
          
            <About />
          </div>
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
          <div>
            {" "}
            <Shop />
          </div>
        </>
      ),
    },
    {
      path: "/contacts",
      element: (
        <>
          {" "}
          <Contacts />{" "}
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
