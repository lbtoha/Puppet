import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../../Component/Button";
import { AuthContext } from "../../../Provider/AuthProvider";
import StarRatingComponent from "react-star-rating-component";

const New = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const handleAlert = () => {
    if (!user) {
      toast("You have to log in first to view details");
    }
  };
  return (
    <div className="w-full lg:max-w-full lg:flex">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${toy.picture})` }} title="">
        <div>
          <p className=" ms-2 text-center text-white bg-red-600 w-fit px-3 rounded-2xl mt-2 text-sm">New</p>
        </div>
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="">
          <div className="text-gray-900 font-bold text-lg ">{toy.toyName}</div>
          <div className="flex items-center">
            <span className="mt-2 font-bold text-xl">Price: {toy.price}$</span>
          </div>

          <Link onClick={handleAlert} to={`/detail/${toy._id}`}>
            <Button>View Details</Button>
          </Link>
          <div className=" mt-2 flex items-center text-sm text-gray-600 ">
            <StarRatingComponent name="rating" value={toy.rating} starCount={5} starColor="#ffb400" emptyStarColor="#ddd" renderStarIcon={() => <span className="text-2xl">★</span>} />
            <span className="ml-2">{toy.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
