import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Component/Loader";
import { AuthContext } from "../../Provider/AuthProvider";
import Dropdown from "../../Component/Dropdown";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user, loader } = useContext(AuthContext);
  const [sort, setSort] = useState("asc"); // Default sorting order is ascending

  const email = user.email;

  useEffect(() => {
    fetch(`https://b7a11-toy-marketplace-server-side-lbtoha.vercel.app/findById?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [myToys]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b7a11-toy-marketplace-server-side-lbtoha.vercel.app/deleteToy/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire(
            'Deleted!',
            'Deleted Successfully',
            'success'
          )
        }

        console.log(data);
        // Update the state to reflect the deletion
        setMyToys(myToys.filter((toy) => toy._id !== id));
      })
      .catch((error) => {
        console.log("Error deleting toy:", error);
      });
        
      }
    })
    
  };

  // sort api

  useEffect(() => {
    fetchToys();
  }, [sort]);

  const fetchToys = async () => {
    
    try {
      const response = await fetch(`https://b7a11-toy-marketplace-server-side-lbtoha.vercel.app/sortToys?sort=${sort}`);
      const data = await response.json();
      setMyToys(data);
    } catch (error) {
      console.log("Error retrieving toys:", error);
    }
  };

  const handleSort = (order) => {
    setSort(order);
  };

  if (loader) {
    return <Loader></Loader>;
  }

  return (
    <>
      <Helmet>
        <title>Puppet | My Toys</title>
      </Helmet>
      <div className="relative py-16 bg-gradient-to-b from-cyan-700  flex justify-center items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 text-white text-center">My Toys</h1>
        </div>
      </div>
      <div className="text-end pb-4 text-lg font-bold mx-40">
        <div className="flex justify-end gap-4 items-center">
          <p>Sort By Price: </p>
          <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
            <button className={`btn border-e-0 ${sort === "asc" ? "bg-cyan-600 text-white" : "bg-white text-black"} hover:bg-cyan-700 hover:text-white`} onClick={() => handleSort("asc")}>
              Ascending
            </button>
            <button className={`btn border-s-0 ${sort === "desc" ? "bg-cyan-600 text-white" : "bg-white text-black"} hover:bg-cyan-700 hover:text-white`} onClick={() => handleSort("desc")}>
              Descending
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto w-full container mx-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Image</th>
              <th>Toy name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available Quantity</th>
              <th>Update or Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myToys.map((myToy) => (
              <tr key={myToy._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={myToy.photo} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{myToy.toyName}</td>
                <td>{myToy.subCategory}</td>
                <td>{myToy.price}</td>
                <td>{myToy.rating}</td>
                <td>{myToy.availableQuantity}</td>

                <th>
                  <Link to={`/update/${myToy._id}`}>
                    <button className="btn border-none bg-red-600 text-white hover:bg-red-700  me-3">Update</button>
                  </Link>
                  <button onClick={() => handleDelete(myToy._id)} className="btn border-none bg-red-600 text-white hover:bg-red-700 ">
                    Delate
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
