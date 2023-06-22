import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Title from "../../../Component/Title";
import Button from "../../../Component/Button";
import FoundToy from "./FoundToy";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const TabSection = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [subcategory, setSubcategory] = useState("Stuffed Animals");
  const [foundToys, setFoundToys] = useState([]);

  const handleSubcategoryChange = (event) => {
    setSubcategory(event.target.innerText);
    console.log(event.target.innerText);
    // handleFindToyBySubcategory();
  };

  useEffect(() => {
    fetch("https://b7a11-toy-marketplace-server-side-lbtoha.vercel.app/toys/find-by-subcategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subcategory }),
      mode: "cors", // Add this option to enable CORS
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => setFoundToys(data))
      .catch((error) => {
        console.error("Error finding toy by subcategory:", error);
      });
  }, [subcategory]);

  console.log(foundToys);
  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const categories = [
    {
      name: "Stuffed Animals",
    },
    {
      name: "Plush Teddy Bears",
    },
    {
      name: "Classic Teddy Bears",
    },
  ];
  return (
    <div className="lg:bg-red-100 mt-10">
      <div className="container mx-auto  ">
        <Title>Shop by Category</Title>
        <Tabs selectedIndex={selectedTab} onSelect={handleTabChange}>
          <TabList className={`text-red-600 border-none`}>
            {categories.map((category, index) => (
              <Tab onClick={() => handleSubcategoryChange(event)} key={index}>
                {category.name}
              </Tab>
            ))}
          </TabList>

          <TabPanel>
            <div className="">
              <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                  {foundToys.slice(0, 3).map((foundToy) => (
                    <FoundToy key={foundToy._id} foundToy={foundToy}></FoundToy>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="">
              <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                  {foundToys.slice(0, 3).map((foundToy) => (
                    <FoundToy key={foundToy._id} foundToy={foundToy}></FoundToy>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="">
              <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                  {foundToys.slice(0, 3).map((foundToy) => (
                    <FoundToy key={foundToy._id} foundToy={foundToy}></FoundToy>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabSection;
