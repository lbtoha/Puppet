import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Button from "../../Component/Button";
import Loader from "../../Component/Loader";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AllToys = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [toysParPage, setToysParPage] = useState(20);
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { totalToys } = useLoaderData();

  const totalPages = Math.ceil(totalToys / toysParPage);

  const pageNumbers = [...Array(totalPages).keys()];
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(data);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://b7a11-toy-marketplace-server-side-lbtoha.vercel.app/allToys?page=${currentPage}&limit=${toysParPage}&search=${searchQuery}`);

      const data = await response.json();
      setToys(data);
    }
    fetchData();
  }, [currentPage, toysParPage, searchQuery]);

  const options = [5, 10, 15, 20];
  function handleSelectChange(event) {
    setToysParPage(parseInt(event.target.value));
    setCurrentPage(0);
  }

  const { loader } = useContext(AuthContext);

  if (loader) {
    return <Loader></Loader>;
  }

  return (
    <>
      <Helmet>
        <title>Puppet | All Toys</title>
      </Helmet>
      <div className="relative py-16 bg-gradient-to-b from-cyan-700  flex justify-center items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 text-white text-center">All Toys</h1>
          <div className="bg-red-400 rounded relative mt-6 lg:mt-14 py-4 pl-4 flex items-center w-full">
            <div className="text-white">
              <FaSearch></FaSearch>
            </div>
            <input type="text" placeholder="Search a toy by name" className="ml-4 w-full bg-transparent leading-none text-white placeholder-white focus:outline-none text-xl" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto w-full container mx-auto">
        <table className="table w-full">
          {/* head */}

          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys.map((d) => (
              <tr key={d._id}>
                <td>{user && user.displayName}</td>
                <td>{d.toyName}</td>
                <td>{d.subcategory}</td>
                <td>{d.price}$</td>
                <td>{d.availableQuantity}</td>
                <th>
                  <Link to={`/detail/${d._id}`}>
                    <Button>View Details</Button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center space-x-5 mt-6">
          {pageNumbers.map((number) => (
            <button key={number} className={` bg-red-300 text-white px-2 ${currentPage === number ? "border-2 border-red-600 rounded-md" : ""}`} onClick={() => setCurrentPage(number)}>
              {number + 1}
            </button>
          ))}
          <select className="border" value={toysParPage} onChange={handleSelectChange}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default AllToys;
