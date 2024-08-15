import { createBrowserRouter } from "react-router-dom";
import Error from "../ShareFile/Error";
import Root from "./Root";
import Home from "../Page/Home/Home";



const Router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default Router;