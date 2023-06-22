import Title from "../../../Component/Title";
import { FaCheck } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="bg-cyan-950 text-white pb-10 mt-10 ps-3 lg:ps-0">
      <div className="container mx-auto lg:flex">
        <div>
          <Title>Why Choose Us?</Title>
          <div className="space-y-10">
            <div className="flex items-center gap-6 font-bubblegum ">
              <span className=" hover:bg-red-600 text-2xl border-2 p-3 rounded-full">
                <FaCheck />
              </span>
              <div>
                <span className="text-2xl text-white">Quick Response</span>
                <p className="mt-3 w-3/4">It is a long established fact that a reader will be distracted by the br readable content of a page when looking at its layout.since when an unknown printer</p>
              </div>
            </div>
            <div className="flex items-center gap-6 font-bubblegum ">
              <span className=" hover:bg-red-600 text-2xl border-2 p-3 rounded-full">
                <FaCheck />
              </span>
              <div>
                <span className="text-2xl text-white">Experienced</span>
                <p className="mt-3 w-3/4">We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded</p>
              </div>
            </div>
            <div className="flex items-center gap-6 font-bubblegum ">
              <span className=" hover:bg-red-600 text-2xl border-2 p-3 rounded-full">
                <FaCheck />
              </span>
              <div>
                <span className="text-2xl text-white">Flexible Payment</span>
                <p className="mt-3 w-3/4">Accusamus et iusto odio dignissimos ducimusa blanditiis praesentium voluptatum deleno atque corrupti quos dolores quas molestias except occaecati</p>
              </div>
            </div>
          </div>
        </div>
        <img className="mt-10 hidden lg:block" src="https://i.ibb.co/7WNVsxL/b-m-l-img-2-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
