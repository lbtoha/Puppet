import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { AuthContext } from "../../Provider/AuthProvider";
import Logo from "../Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    setLoggedUser(user);
  }, [user]);

  const handleLogout = () => {
    logOut();
    console.log("clicked logout");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#F7F3F0] w-full shadow-2xl text-black font-jost">
      <div className="navbar container mx-auto">
        <Link to="/" className="flex-1">
          <Logo></Logo>
        </Link>
        <div className="hidden lg:flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/alltoys">All Toys</Link>

          {loggedUser && (
            <>
              <Link to="/mytoys">My Toys</Link>
              <Link to="/add">Add A Toy</Link>
            </>
          )}
          <Link to="/blogs">Blogs</Link>
          {loggedUser ? (
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={loggedUser.photoURL} title={loggedUser.displayName} alt="" />
                </div>
              </label>
              <button className="bg-red-600 m-4 px-4 py-2 rounded-md text-white hover:bg-red-700" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Button>
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
        <button className={`lg:hidden focus:outline-none menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col absolute bg-white text-black top-20 mt-3 right-0 space-y-3 text-right z-50 px-8 py-2 h-screen ">
            <Link to="/">Home</Link>
            <Link to="/alltoys">All Toys</Link>
            {loggedUser && (
              <>
                <Link to="/mytoys">My Toys</Link>
                <Link to="/add">Add A Toy</Link>
              </>
            )}
            <Link to="/blogs">Blogs</Link>
            {loggedUser ? (
              <>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={loggedUser.photoURL} title={loggedUser.displayName} alt="" />
                  </div>
                </label>
                <button className="bg-red-600 m-4 px-4 py-2 rounded-md text-white hover:bg-red-700" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <Button>
                <Link to="/login">Login</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
