
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import { useEffect, useState } from "react";


const Products = () => {

    // const axiosPublic = useAxiosPublic();


    // const { data: products = [], refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/products',
    //         );
    //         return res.data;
    //     }
    // })

    // console.log(products);

    // //////////////////////////   Pagination Funtionality   ////////////////////////////////

    const [count, setCount] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([]);


    // const itemsPerPage = 10;
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/productsCount`)
            .then(res => res.json())
            .then(data => setCount(data.count))
    }, [])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/product?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, itemsPerPage]);

    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }



    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 p-2 mt-4 gap-4">

                {
                    products.map(pro => <div key={pro._id}>

                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                                alt=""
                                src={pro.productImage}
                                className="h-56 w-full object-cover mt-1"
                            />

                            <div className="bg-white p-4 sm:p-6">
                                {/* <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time> */}

                                <a href="#">
                                    <h3 className="mt-0.5 text-gray-900 font-bold text-xl">{pro.productName}</h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">Category : <span className="text-gray-500">{pro.category}</span></p>
                                <p className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">Brand : <span className="text-gray-500">{pro.brandName}</span></p>
                                <p className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">Description : <span className="text-gray-500">{pro.description}</span></p>
                                <div className="grid  grid-cols-2">
                                    <div className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">Price : <span className="text-gray-500"> $ {pro.
                                        price}</span></div>
                                    <div className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">Rating : <span className="text-gray-500"> {pro.ratings}</span></div>
                                </div>
                                <p className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">Creation Date : <span className="text-gray-500">{pro.productCreationDateTime.date},  {pro.productCreationDateTime.time} </span></p>
                            </div>
                        </article>

                    </div>

                    )
                }

            </div>
            <div className='pagination mb-4 p-4'>
                <div className="text-center grid justify-center p-4">
                    <p className="bg-yellow-100 text-black text-2xl rounded-full font-extrabold p-2 w-72 text-center">Current page: <span className="text-blue-500">{currentPage}</span></p>
                </div>
                <button className="join-item btn btn-outline" onClick={handlePrevPage}>Previous</button>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'selected' : undefined}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    ><span className="join-item btn btn-square hover:bg-blue-500 text-white">{page}</span></button>)
                }
                <button className="join-item btn btn-outline" onClick={handleNextPage}>Next</button>
                <select value={itemsPerPage} className="join-item btn btn-square hover:bg-blue-600 text-white ml-2" onChange={handleItemsPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default Products;