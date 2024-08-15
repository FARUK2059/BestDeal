import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="p-1">
            <div>
                <footer className="mb-4">
                    <div className="border rounded-md p-6 mx-auto">
                        <div className="lg:flex">
                            <div className="w-full  lg:w-2/5">
                                <div className="px-6">
                                    <Link to="/" className="btn btn-ghost font-bold hover:text-yellow-600 hover:bg-pink-950 text-green-700 text-2xl">BestDeal</Link>

                                    <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Engage with a vibrant community of users sharing their experiences</p>

                                    <div className="flex mt-6 justify-center ">
                                        <a href="#"
                                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                            aria-label="Reddit">
                                            <FaLinkedinIn />
                                        </a>

                                        <a href="#"
                                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                            aria-label="Facebook">
                                            <FaFacebookF />
                                        </a>

                                        <a href="#"
                                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                            aria-label="Github">
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 lg:mt-0 lg:flex-1">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                    <div>
                                        <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
                                    </div>

                                    <div>
                                        <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
                                    </div>

                                    <div>
                                        <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">service</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tarm and Condition</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">SunamIT</a>
                                    </div>

                                    <div>
                                        <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                        <div>
                            <p className="text-center text-gray-500 dark:text-gray-400">© Brand 2024 - All rights reserved</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;