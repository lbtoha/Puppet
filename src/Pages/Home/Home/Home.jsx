import { useContext } from "react";
import Loader from "../../../Component/Loader";
import { AuthContext } from "../../../Provider/AuthProvider";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import NewArrivals from "../NewArrivals/NewArrivals";
import TabSection from "../Tab/TabSection";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import { Helmet } from "react-helmet";

const Home = () => {
  const { loader } = useContext(AuthContext);

  if (loader) {
    return <Loader></Loader>;
  }
  return (
    <div className="mx-3">
      <Helmet>
        <title>Puppet | Home</title>
      </Helmet>
      <Banner></Banner>
      <Gallery></Gallery>
      <TabSection></TabSection>
      <NewArrivals></NewArrivals>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
