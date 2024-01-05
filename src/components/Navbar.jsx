import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import home from "../assets/Home.svg";
import add from "../assets/add.svg";
import dude from "../assets/codingDude.png";
import Search from "../assets/search.svg";

const Navbar = () => {
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchItem === "") {
      return;
    }
    navigate(`/search/?search=${searchItem}`);
    setSearchItem("");
  };
  return (
    <div className="max-w-[1300px] mx-auto">
      <nav className=" py-2  flex justify-around items-center ">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="text"
              value={searchItem}
              placeholder="search...."
              className=" outline-none"
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <button type="submit">
              <img src={Search} alt="" />
            </button>
          </div>
        </form>
        <Link to={"/"} className="flex items-center ">
          <img src={home} alt="" />
          <p className="text-xl font-bold">Home</p>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            to={"/create"}
            className="flex items-center  border-black border-2 py-1 px-2 rounded-lg"
          >
            <img src={add} alt="" />
            Create
          </Link>
          <img src={dude} alt="" className=" w-12 h-10 rounded-full" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
