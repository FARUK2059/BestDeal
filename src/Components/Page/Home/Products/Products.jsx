
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic"


const Products = () => {

    const axiosPublic = useAxiosPublic();
    

    const { data: products = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products',
            );
            return res.data;
        }
    })

    console.log(products);
    

    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 p-2 mt-4">
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        className="h-56 w-full object-cover"
                    />

                    <div className="bg-white p-4 sm:p-6">
                        {/* <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time> */}

                        <a href="#">
                            <h3 className="mt-0.5 text-gray-900 font-bold text-xl">Name</h3>
                        </a>

                        <div className="grid  grid-cols-2">
                            <div className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">Category : <span className="text-gray-500"> Lotto</span></div>
                            <div className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">Brand : <span className="text-gray-500"> Single</span></div>
                        </div>
                        <p className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">Description : <span className="text-gray-500"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut consequatur iste rerum expedita, iusto incidunt repudiandae fugit corporis deserunt reprehenderit cum deleniti provident nam blanditiis quae nisi porro praesentium libero!</span></p>
                        <div className="grid  grid-cols-2">
                            <div className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">Price : <span className="text-gray-500"> $20</span></div>
                            <div className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">Rating : <span className="text-gray-500"> 4</span></div>
                        </div>
                        <p className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">Creation Date : <span className="text-gray-500"> 26/03/2024,  12:45 PM </span></p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Products;