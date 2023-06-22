import React, { useContext } from "react";
import Button from "../../../Component/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "react-rating";
import { FaStar, FaStarHalf } from "react-icons/fa";
import StarRatingComponent from "react-star-rating-component";

const FoundToy = ({ foundToy }) => {
  const { user } = useContext(AuthContext);
  const handleAlert = () => {
    if (!user) {
      toast("You have to log in first to view details");
    }
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4">
      <a href="" className=" block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img className="absolute inset-0 h-full w-full object-cover" src={foundToy.picture} alt="" />
        </div>
        <div className="p-4">
          <h2 className="mt-2 mb-2  font-bold">{foundToy.toyName}</h2>
          <div className="mt-3 flex items-center">
            <span className="font-bold text-xl">Price: {foundToy.price}</span>&nbsp;<span className="text-sm font-semibold">€</span>
          </div>
        </div>
        <div className="ms-3 mb-2">
          <Link onClick={handleAlert} to={`/detail/${foundToy._id}`}>
            <Button>View Details</Button>
          </Link>
        </div>

        <div className="p-4 flex items-center text-lg text-gray-600 border-t-2">
          <StarRatingComponent name="rating" value={foundToy.rating} starCount={5} starColor="#ffb400" emptyStarColor="#ddd" renderStarIcon={() => <span className="text-2xl">★</span>} />
          <span className="ml-2">{foundToy.rating}</span>
        </div>
      </a>
    </div>
  );
};

export default FoundToy;
