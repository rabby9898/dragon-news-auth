import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../MainLayOut/MainLayOut";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Career from "../../Pages/Career/Career";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import NewsDetails from "../../Components/NewsDetails/NewsDetails";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/news-details/:id",
        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/news.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
