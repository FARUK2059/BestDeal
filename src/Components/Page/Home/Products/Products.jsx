
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const Products = () => {
    const axiosPublic = useAxiosPublic();

    const { data: producted = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products');
            return res.data;
        }
    });

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceRangeFilter, setPriceRangeFilter] = useState([0, Infinity]);
    const [sortOption, setSortOption] = useState('');
    const [count, setCount] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    // /////////////////    *****    Pagination Funtionality  *******   //////////////////

    useEffect(() => {
        setProducts(producted);
    }, [producted]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/productsCount`)
            .then(res => res.json())
            .then(data => setCount(data.count));
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/product?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [currentPage, itemsPerPage]);


    // /////////////////    *****    Search Funtionality  *******   //////////////////

    const handleSearchProduct = e => {
        setSearch(e.target.value.toLowerCase());
    };

    const handleReset = () => {
        setSearch('');
        setBrandFilter('');
        setCategoryFilter('');
        setPriceRangeFilter([0, Infinity]);
        setSortOption('');
    };


    // /////////////////    *****    Categorization  Funtionality  *******   //////////////////

    const filterProducts = () => {
        let filteredData = producted;

        if (brandFilter) {
            filteredData = filteredData.filter((query) =>
                query.brandName === brandFilter
            );
        }

        if (categoryFilter) {
            filteredData = filteredData.filter((query) =>
                query.category === categoryFilter
            );
        }

        if (priceRangeFilter) {
            filteredData = filteredData.filter((query) => {
                const price = query.price;
                return price >= priceRangeFilter[0] && price <= priceRangeFilter[1];
            });
        }

        if (search) {
            filteredData = filteredData.filter((query) =>
                query.productName.toLowerCase().includes(search)
            );
        }

        return filteredData;
    };


    // /////////////////    *****    Sorting Funtionality  *******   //////////////////

    const sortProducts = (products) => {
        if (sortOption === 'priceLowToHigh') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'priceHighToLow') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'newestFirst') {
            return products.sort((a, b) => new Date(b.productCreationDateTime.date) - new Date(a.productCreationDateTime.date));
        }
        return products;
    };


    // /////////////////    *****    Pagination Funtionality  *******   //////////////////

    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        setItemsPerPage(val);
        setCurrentPage(0);
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        const filteredProducts = filterProducts();
        const sortedProducts = sortProducts(filteredProducts);
        setProducts(sortedProducts);
    }, [brandFilter, categoryFilter, priceRangeFilter, search, sortOption, producted]);

    return (
        <div>

            {/* Search Funtionality */}
            <div className="">
                <div className="flex gap-2 justify-center p-6">
                    <form onSubmit={e => e.preventDefault()} className="flex gap-2">
                        <input
                            type="text"
                            onChange={handleSearchProduct}
                            value={search}
                            name='search'
                            placeholder='Enter Product Name'
                            aria-label='Enter Product Name'
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </form>
                    <button onClick={handleReset} className="btn btn-warning hover:bg-primary hover:text-white">Reset</button>
                </div>
            </div>

            {/* catagorization and sorting Section */}
            <section className=" items-center p-4">
                <div className="flex gap-2 justify-center p-6">
                    <select onChange={e => setBrandFilter(e.target.value)} value={brandFilter} className="select select-bordered">
                        <option value="">All Brands</option>
                        <option value="SoundMagic">SoundMagic</option>
                        <option value="VisionElectro">VisionElectro</option>
                        <option value="GamePro">GamePro</option>
                        <option value="FileWell">FileWell</option>
                        <option value="ActionPro">ActionPro</option>
                        <option value="TimeTech">TimeTech</option>
                        <option value="ChergerUp">ChergerUp</option>
                        <option value="BrightSmile">BrightSmile</option>
                        <option value="SoundPro">SoundPro</option>
                    </select>

                    <select onChange={e => setCategoryFilter(e.target.value)} value={categoryFilter} className="select select-bordered">
                        <option value="">All Categories</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Home Appliances">Home Appliances</option>
                    </select>

                    <select onChange={e => setPriceRangeFilter(e.target.value.split('-').map(Number))} value={priceRangeFilter.join('-')} className="select select-bordered">
                        <option value="0-Infinity">All Prices</option>
                        <option value="0-50">Under $50</option>
                        <option value="50-100">$50 to $100</option>
                        <option value="100-500">$100 to $500</option>
                        <option value="500-Infinity">Over $500</option>
                    </select>

                    <select onChange={e => setSortOption(e.target.value)} value={sortOption} className="select select-bordered">
                        <option value="">Sort By</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="newestFirst">Date Added: Newest First</option>
                    </select>

                    <button onClick={handleReset} className="btn btn-warning hover:bg-primary hover:text-white">Reset</button>
                </div>
            </section>

            {/* Card Section */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 p-2 mt-4 gap-4">
                {products.map(pro => (
                    <div key={pro._id}>
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                                alt=""
                                src={pro.productImage}
                                className="h-56 w-full object-cover mt-1"
                            />
                            <div className="bg-white p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="mt-0.5 text-gray-900 font-bold text-xl">{pro.productName}</h3>
                                </a>
                                <p className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">
                                    Category : <span className="text-gray-500">{pro.category}</span>
                                </p>
                                <p className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">
                                    Brand : <span className="text-gray-500">{pro.brandName}</span>
                                </p>
                                <p className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">
                                    Description : <span className="text-gray-500">{pro.description}</span>
                                </p>
                                <div className="grid grid-cols-2">
                                    <div className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">
                                        Price : <span className="text-gray-500">$ {pro.price}</span>
                                    </div>
                                    <div className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">
                                        Rating : <span className="text-gray-500"> {pro.ratings}</span>
                                    </div>
                                </div>
                                <p className="mt-2 line-clamp-3 text-start font-medium text-black text-sm/relaxed">
                                    Creation Date : <span className="text-gray-500">{pro.productCreationDateTime.date}, {pro.productCreationDateTime.time}</span>
                                </p>
                            </div>
                        </article>
                    </div>
                ))}
            </div>

            {/* Pagination Secction */}
            <div className='pagination mb-4 p-4'>
                <div className="text-center grid justify-center p-4">
                    <p className="bg-yellow-100 text-black text-2xl rounded-full font-extrabold p-2 w-72 text-center">
                        Current page: <span className="text-blue-500">{currentPage}</span>
                    </p>
                </div>
                <button className="join-item btn btn-outline" onClick={handlePrevPage}>Previous</button>
                {pages.map(page => (
                    <button
                        className={currentPage === page ? 'selected' : undefined}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >
                        <span className="join-item btn btn-square hover:bg-blue-500 text-white">{page}</span>
                    </button>
                ))}
                <button className="join-item btn btn-outline" onClick={handleNextPage}>Next</button>
                <select value={itemsPerPage} className="join-item btn btn-square hover:bg-blue-600 text-white ml-2" onChange={handleItemsPerPage}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Products;

