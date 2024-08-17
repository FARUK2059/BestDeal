import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Login = () => {

    const { signInUser, googleLogIn } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    // Navigation System
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(navigate, location);


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Your LogIn successfull")

                // navigat;
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error)
                setPasswordError("Inpute currect password")
            })
    }

    // Google LogIn
    const handleGoogleSignIn = () => {
        // console.log("google  coming sooooooon");
        googleLogIn()
            .then((result) => {
                console.log(result.user);
                toast.success("Your LogIn successfully");
                // navigat;
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.log(error)
                toast.error("Your login faild")
            })
    }


    return (
        <div>
            <div>

                {/* Dynamic Title Section */}
                {/* <div>
                    <Helmet>
                        <title> Log In | Madicare </title>
                    </Helmet>
                </div> */}

                {/* REgister form section */}
                <div>

                    <div>

                        <section className="relative py-10  sm:py-16 lg:py-24 min-h-screen">
                            <div className="absolute lg:inset-0">
                                <img className="object-cover w-full h-full" src="https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865393.jpg?size=626&ext=jpg&ga=GA1.1.1337524503.1717354786&semt=ais_hybrid" alt="" />
                            </div>

                            <section className="relative">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold mt-4 text-yellow-200">Login Now</h2>
                                </div>
                                <div className="lg:m-20 lg:flex  lg:justify-center  lg:items-center  p-4  ">

                                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                        <img className="p-6" src="https://img.freepik.com/free-vector/login-concept-illustration_114360-757.jpg?size=626&ext=jpg&ga=GA1.1.1337524503.1717354786&semt=ais_hybrid" alt="" />
                                    </div>
                                    <div className="flex flex-col justify-center text-center  ">
                                        <div className=" ">
                                            <div className="overflow-hidden">
                                                <div className="px-4 py-6 ">

                                                    <form onSubmit={handleLogin} className="lg:mt-4 mt-16">
                                                        <div className="space-y-4 form-control">

                                                            {/* Email section */}
                                                            <div className='form-control'>
                                                                <label className="text-base font-medium justify-start grid ml-2 text-white"> Email</label>
                                                                <div className="">
                                                                    <input type="email" name="email" placeholder="Enter your email" className="block w-full p-4 input text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" required />
                                                                </div>
                                                            </div>



                                                            {/* Passwoed section */}
                                                            <div className='form-control'>
                                                                <label className="text-base font-medium justify-start grid ml-2 text-white"> Password</label>
                                                                <div className="relative">
                                                                    <input
                                                                        type={showPassword ? "text" : "password"}

                                                                        name="password" placeholder="Enter your password" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" required />
                                                                    <span className="absolute -mt-9 lg:ml-20 ml-44" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                                                                    <div className="label ">
                                                                        <span className="label-text-alt text-red-600">{passwordError}</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Submit button section */}
                                                            <div className='form-control'>
                                                                <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Login</button>
                                                            </div>

                                                        </div>

                                                    </form>

                                                    <div className="flex flex-col w-full">
                                                        <div className="divider divider-error"> OR </div>
                                                    </div>

                                                    {/* Google LogIn Section */}
                                                    <div className='p-2'>
                                                        <button onClick={handleGoogleSignIn} className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Google LogIn</button>
                                                    </div>

                                                    <p className='mt-4'><small>Do not Have An Account ? Go to <Link to="/registation" className='text-blue-500'>Register</Link> </small></p>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>



                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;