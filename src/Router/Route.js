import {createBrowserRouter,} from "react-router-dom";
import CreateAccount from "../Components/CreateAccount/CreateAccount";
import Home from "../Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/createaccount",
        element: <CreateAccount/>,
      },
      
  ]);