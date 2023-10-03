import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../MainLayOut/MainLayOut";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Career from "../../Pages/Career/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },
]);
export default router;
