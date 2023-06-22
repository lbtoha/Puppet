import React from "react";
import { Helmet } from "react-helmet-async";
import { FaQuestion } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Puppet | Blog</title>
      </Helmet>
      <div>
        <div className="relative py-16 bg-gradient-to-b from-cyan-700 flex justify-center items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 text-white">Blog</h1>
          </div>
        </div>
        <div className="container mx-auto py-9 flex flex-col items-center justify-center">
          <div role="list" className="w-11/12 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div role="listitem" className="focus:outline-none">
              <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                <div className="flex">
                  <div className="text-3xl text-red-600">
                    <FaQuestion></FaQuestion>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800">What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Access tokens and refresh tokens are integral components of authentication systems. An access token is a short time client for accessing specific resources. On the other hand, a refresh token is a long-lived token used to obtain new access tokens when they expire.</p>
                  </div>
                </div>
              </a>
            </div>
            <div role="listitem" className="focus:outline-none">
              <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                <div className="flex">
                  <div>
                    <div className="text-3xl text-red-600">
                      <FaQuestion></FaQuestion>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800">Compare SQL and NoSQL databases?</p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">SQL databases are structured, use tables and relations, and ensure data consistency, but can be less scalable. NoSQL databases are unstructured, use key-value pairs or documents, offer high scalability and performance, but sacrifice strict consistency. Both have their strengths and are chosen based on specific application requirements.</p>
                  </div>
                </div>
              </a>
            </div>
            <div role="listitem" className="focus:outline-none">
              <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                <div className="flex">
                  <div>
                    <div className="text-3xl text-red-600">
                      <FaQuestion></FaQuestion>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800">What is express js? What is Nest JS?</p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Express.js is a minimalist web application framework for Node.js, providing a simple and flexible way to build web applications and APIs.</p>
                  </div>
                </div>
              </a>
            </div>
            <div role="listitem" className="focus:outline-none">
              <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                <div className="flex">
                  <div>
                    <div className="text-3xl text-red-600">
                      <FaQuestion></FaQuestion>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium leading-none text-gray-800">What is MongoDB aggregate and how does it work (google it)?</p>
                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">MongoDB's aggregate is a powerful feature that allows data aggregation operations, such as grouping, filtering, and calculating values, to be performed on collections. It works by applying a sequence of stages to transform and manipulate data, providing advanced querying and analytics capabilities within MongoDB.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
