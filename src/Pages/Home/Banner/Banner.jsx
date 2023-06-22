import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  return (
    <div>
      <AwesomeSlider className="lg:h-[calc(100vh-140px)]" animation="cubeAnimation">
        <img className="w-full relative lg:h-[calc(100vh-140px)] object-cover object-center" data-src="https://i.ibb.co/hmF6fMd/2.jpg">
          <div className=" bg-black bg-opacity-50 w-full lg:h-[calc(100vh-140px)] h-96">
           
          </div>
        </img>
        <img className="w-full relative lg:h-[calc(100vh-140px)] object-cover object-center" data-src="https://i.ibb.co/nDdvC14/24699174-6986605.jpg">
          <div className=" bg-black bg-opacity-50 w-full lg:h-[calc(100vh-140px)] h-96">
            
          </div>
        </img>
        <img className="w-full relative lg:h-[calc(100vh-140px)] object-cover object-center" data-src="https://i.ibb.co/jfyTTKd/6101729-3159229.jpg">
          <div className=" bg-black bg-opacity-50 w-full lg:h-[calc(100vh-140px)] h-96">
            
          </div>
        </img>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
