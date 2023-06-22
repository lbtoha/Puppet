import React from "react";

const Button = ({ children }) => {
  return <button className="bg-red-600 mt-4 px-4 py-2 rounded-md text-white hover:bg-red-700">{children}</button>;
};

export default Button;
