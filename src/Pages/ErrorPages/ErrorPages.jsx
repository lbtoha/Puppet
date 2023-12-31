import React from "react";
import { Link } from "react-router-dom";

const ErrorPages = () => {
  return (
    <div className="bg-white h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="bg-white flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="flex flex-col items-center py-16 ">
            <img className="px-4 hidden md:block" src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" alt="" />
            <img className="md:hidden" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" alt="" />
            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">OOPS! </h1>
            <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">No signal here! we cannot find the page you are looking for </p>
            <Link className="mx-4 py-2 text-lg w-44 border rounded-md text-white  bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-red-800 text-center ">Go Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPages;
