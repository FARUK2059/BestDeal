import { createBrowserRouter } from "react-router-dom";
import Error from "../ShareFile/Error";
import Home from "../Page/Home";
import Root from "./Root";



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