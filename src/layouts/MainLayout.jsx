import React from "react";
import Navbar from "../Component/SharedComponent/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Component/SharedComponent/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
