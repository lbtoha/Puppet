import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white ms-3 lg:ms-0 pt-10 pb-10 lg:pt-[120px] lg:pb-10 ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <a href="javascript:void(0)" className=" max-w-[160px]">
                <Logo></Logo>
              </a>
              <p className="text-body-color mb-7 text-base mt-5">Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam.</p>
              <p className="text-dark flex items-center text-sm font-medium">
                <span className="text-red-600 text-2xl mr-2">
                  <FaPhoneSquareAlt></FaPhoneSquareAlt>
                </span>
                <span>+012 (345) 678 99</span>
              </p>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">Pages</h4>
              <div className="flex flex-col gap-4">
                <Link className="hover:text-red-600" to="/">
                  Home
                </Link>
                <Link className="hover:text-red-600" to="/alltoys">
                  All Toys
                </Link>
                <Link className="hover:text-red-600" to="/blogs">
                  Blogs
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">Category</h4>
              <ul>
                <li>
                  <a href="javascript:void(0)" className="text-body-color hover:text-red-600 mb-2 inline-block text-base leading-loose">
                    Hug Puppy
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="text-body-color hover:text-red-600 mb-2 inline-block text-base leading-loose">
                    Lovey Dovey
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="text-body-color hover:text-red-600 mb-2 inline-block text-base leading-loose">
                    Babique Teddy
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="text-body-color hover:text-red-600 mb-2 inline-block text-base leading-loose">
                    Babique Penguin
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">Quick Links</h4>
              <ul>
                <li>
                  <a href="javascript:void(0)" className="text-body-color hover:text-red-600 mb-2 inline-block text-base leading-loose">
                    Premium Support
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="text-body-color hover:text-red-600 mb-2 inline-block text-base leading-loose">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="text-body-color hover:text-red-600 mb-2 inline-block text-base leading-loose">
                    Know Our Team
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="text-body-color hover:text-red-600 mb-2 inline-block text-base leading-loose">
                    Download App
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">Follow Us On</h4>
              <div className="mb-6 flex items-center">
                <a href="javascript:void(0)" className="text-dark hover:bg-red-600 hover:border-red-600 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                  <FaFacebookF></FaFacebookF>
                </a>
                <a href="javascript:void(0)" className="text-dark hover:bg-red-600 hover:border-red-600 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                  <FaTwitter></FaTwitter>
                </a>
                <a href="javascript:void(0)" className="text-dark hover:bg-red-600 hover:border-red-600 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                  <FaYoutube></FaYoutube>
                </a>
                <a href="javascript:void(0)" className="text-dark hover:bg-red-600 hover:border-red-600 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                  <FaLinkedinIn></FaLinkedinIn>
                </a>
              </div>
              <div className="flex gap-2 mb-2 items-start ">
                <p className="text-lg font-bold">Address:</p>
                <p className="text-body-color text-base"> 436 Poor House Ave. Roseville, MI 48066</p>
              </div>
              <p className="text-body-color text-base">&copy; 2023 Puppet. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 bottom-0 z-[-1]">
          <svg width="217" height="229" viewBox="0 0 217 229" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z" fill="url(#paint0_linear_1179_5)" />
            <defs>
              <linearGradient id="paint0_linear_1179_5" x1="76.5" y1="281" x2="76.5" y2="1.22829e-05" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3056D3" stop-opacity="0.08" />
                <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute top-10 right-10 z-[-1]">
          <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z" fill="url(#paint0_linear_1179_4)" />
            <defs>
              <linearGradient id="paint0_linear_1179_4" x1="-1.63917e-06" y1="37.5" x2="75" y2="37.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="red" stop-opacity="0.31" />
                <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
