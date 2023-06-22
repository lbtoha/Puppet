import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Button from "../../Component/Button";
import Loader from "../../Component/Loader";

const ProductDetails = () => {
  const { _id, toyName, picture, price, detailDescription, subcategory, rating, availableQuantity } = useLoaderData();
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return <Loader></Loader>;
  }
  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-96 w-full object-cover object-center rounded border border-gray-200" src={picture} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{toyName}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <span className="text-gray-600 ml-3"> {rating} Rating</span>
                </span>
              </div>
              <p className="leading-relaxed">{detailDescription}</p>
              <div className="mt-2 items-center pb-5  mb-5 text-sm space-y-2 text-slate-500">
                <p className="mr-3">Seller: {user && user.displayName}</p>
                <p className="mr-3">Seller Email: {user && user.email}</p>
              </div>
              <p className=" text-xl mt-3">
                <span className=" text-red-600 font-bold">Price:</span> {price}$
              </p>
              <p className=" text-xl mt-2">
                <span className=" text-red-600 font-bold">Available:</span> {availableQuantity}
              </p>
              <Button className="self-end">Bye Now</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
