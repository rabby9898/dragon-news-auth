import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../MainLayOut/MainLayOut";
import Home from "../../Pages/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default Router;