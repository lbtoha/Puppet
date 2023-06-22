import React, { useEffect, useState } from "react";
import Title from "../../../Component/Title";
import Button from "../../../Component/Button";
import New from "./New";

const NewArrivals = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://b7a11-toy-marketplace-server-side-lbtoha.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  console.log(toys.slice(0, 3));
  return (
    <div className="container mx-auto">
      <Title>New Arrivals</Title>
      <div className="py-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {toys.slice(0, 3).map((toy) => (
          <New key={toy._id} toy={toy}></New>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
