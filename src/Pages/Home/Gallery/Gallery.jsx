import Title from "../../../Component/Title";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="container mx-auto " data-aos="flip-left" data-aos-delay="1000" data-aos-anchor=".example-selector">
        <Title>Gallery</Title>
        <div className="-m-1 flex flex-wrap md:-m-2 " data-aos="fade-up">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://i.ibb.co/BcmvPdX/6-1e618398-2d57-4817-9d52-3350a599ece1-large-crop-center.jpg" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://i.ibb.co/3BDxj0p/3-306467ba-b72e-49ad-9413-6b9084c02449-large-crop-center.jpg" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://i.ibb.co/yFgrx2s/5-a9f679c9-58fc-4297-8feb-5b3e8cf00e58-large-crop-center.jpg" />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://i.ibb.co/WKn82v1/Slinky-Dog.png" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://i.ibb.co/y6L58H7/H04e963c87e1b49bc917b9fa033687434-E-jpg-960x960.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://i.ibb.co/5T5PhgX/H5411d667d7064abfab5d29b2793e3025n.webp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
