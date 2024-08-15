import { Outlet } from "react-router-dom";
import Navbar from "../ShareFile/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;