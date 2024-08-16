import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Autentication/AuthProvider";
import { toast } from "react-toastify";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("LogOut successfull")
            })
            .catch()
    }

    

    const { data: producted = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products');
            return res.data;
        }
    });

    const navbar = <>
        <li><Link>About</Link></li>
        <li><Link>Contact</Link></li>
        <li><Link><span className="font-bold">Total Products </span>{producted.length}</Link></li>
    </>



    return (
        <div className="p-1">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navbar}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">BestDeal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <Link onClick={handleSignOut} className="btn">Log Out</Link> : <Link to="/login" className="btn">Log In</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;