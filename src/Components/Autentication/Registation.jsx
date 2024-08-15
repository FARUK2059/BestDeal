import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Registation = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [errorpassword, setErrorPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Navigation System
    const location = useLocation();
    const navigat = useNavigate();

    const handleRegistation = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        if (password.length < 6) {
            setErrorPassword('Password should be at last 6 characters');
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            setErrorPassword('Your password should have at last on Upper cash carecter')
            return;
        }

        else if (!/[a-z]/.test(password)) {
            setErrorPassword('Your password should be have last on Lower cash carecter')
            return;
        }

        // Creat user setup
        createUser(email, password)
            .then(result => {

                console.log(result.user)
                navigat(location?.state ? location.state : '/');
                updateUserProfile(name)
                    .then(() => {
                        toast.success("Your Registation and Login successfull")
                    })
            })
            .catch(error => {
                console.log(error)
                // toast.error("You already registered, Please back to home")
            })

    }


    return (
        <div>
            <div>

                <div className=" grid justify-center bg-base-200 mb-10 ">
                    <div className="grid justify-center text-center  ">
                        <div className="text-center p-10">
                            <h1 className="text-2xl font-bold text-white ">Registation now!</h1>
                        </div>
                        <div className="grid w-full  bg-base-100 justify-center text-center">

                            <form onSubmit={handleRegistation} className="card-body">

                                {/* Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Inpute your Name" className="input input-bordered text-white" required />
                                </div>

                                {/* Email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Inpute your email" className="input input-bordered text-white" required />
                                </div>

                                {/* Passsword */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={showPassword ? "text" : "password"} name="password" placeholder="Input your password" className="input input-bordered text-white" required />
                                    <span className="absolute mt-4 lg:right-4 right-4 md:right-4" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                                    <div className="label ">
                                        <span className="label-text-alt text-red-400">{errorpassword}</span>
                                    </div>
                                </div>

                                <div className="form-control mt-2">
                                    <button className="btn btn-primary">Registation</button>
                                </div>
                            </form>
                            <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Registation;