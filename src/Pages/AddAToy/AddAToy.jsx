import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../../Component/Loader";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddAToy = () => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return <Loader></Loader>;
  }
  const email = user.email;

  const [toyData, setToyData] = useState({
    email: email,
    toyName: "",
    subCategory: "",
    price: 0,
    rating: 0,
    availableQuantity: 0,
    detail: "",
    photo: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setToyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://b7a11-toy-marketplace-server-side-lbtoha.vercel.app/addToy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toyData),
      });

      if (response.ok) {
        // Toy added successfully
        
        console.log("Toy added successfully");
        // Perform any additional actions or display success message
      } else {
        // Failed to add toy
        console.log("Failed to add toy");
        // Handle error or display error message
      }
    } catch (error) {
      console.error("Error adding toy:", error);
      // Handle error or display error message
    }
  };

  return (
    <div>
      <Helmet>
        <title>Puppet | Add Toy</title>
      </Helmet>
      <div className="relative py-16 bg-gradient-to-b from-cyan-700  flex justify-center items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 text-white text-center">Add Toy</h1>
        </div>
      </div>
      <div className="container mx-auto max-w-xl">
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="toy-name" className="block text-sm font-semibold text-gray-800">
              Toy Name
            </label>
            <input type="text" name="toyName" value={toyData.toyName} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className="mb-2">
            <label htmlFor="sub-category" className="block text-sm font-semibold text-gray-800">
              Sub Category
            </label>
            <input type="text" name="subCategory" value={toyData.subCategory} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

          <div className="mb-2">
            <label htmlFor="price" className="block text-sm font-semibold text-gray-800">
              Price
            </label>
            <input type="number" name="price" value={toyData.price} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className="mb-2">
            <label htmlFor="rating" className="block text-sm font-semibold text-gray-800">
              Rating
            </label>
            <input type="number" name="rating" value={toyData.rating} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className="mb-2">
            <label htmlFor="quantity" className="block text-sm font-semibold text-gray-800">
              Available quantity
            </label>
            <input type="number" name="availableQuantity" value={toyData.availableQuantity} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className="mb-2">
            <label htmlFor="detail" className="block text-sm font-semibold text-gray-800">
              Detail description
            </label>
            <input type="text" name="detail" value={toyData.detail} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

          <div className="mb-2">
            <label htmlFor="photo" className="block text-sm font-semibold text-gray-800">
              Photo URL
            </label>
            <input type="text" name="photo" value={toyData.photo} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

          <div className="mt-6">
            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-600">
              Add Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
