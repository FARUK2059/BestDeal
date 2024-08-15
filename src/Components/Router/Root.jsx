import { Outlet } from "react-router-dom";
import Navbar from "../ShareFile/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Footer from "../ShareFile/Footer";



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;