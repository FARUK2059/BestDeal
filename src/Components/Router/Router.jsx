import { createBrowserRouter } from "react-router-dom";
import Error from "../ShareFile/Error";
import Root from "./Root";
import Home from "../Page/Home/Home";
import Login from "../Autentication/Login";
import Registation from "../Autentication/Registation";



const Router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "registation",
                element: <Registation></Registation>
            },
            
        ]
    },
]);

export default Router;