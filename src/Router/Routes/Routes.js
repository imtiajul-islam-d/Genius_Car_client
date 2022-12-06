import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/CheckOut/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/checkout/:id',
        loader: ({params}) => fetch(`https://genious-car-server-mocha.vercel.app/services/${params.id}`),
        element:<PrivetRoute> <Checkout></Checkout></PrivetRoute>
      },
      {
        path: '/orders',
        element: <PrivetRoute><Orders></Orders></PrivetRoute>
      }
    ],
  },
]);
export default routes;
