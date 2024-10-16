import React from "react";
import profile from "../../assets/profile.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="py-4">
      <div className="container flex justify-between items-center">
        {/*logo section */}
        <div>
          <p className="text-lg font-semibold">
            FOOD <span className="text-red-500">EAT</span>
          </p>
        </div>
        {/*menu section */}
        <div className="flex justify-center items-center gap-6">
          <ul className="gap-8 hidden sm:flex">
            <li className="hover:border-b-2 border-primary uppercase">Home</li>
            <li className="hover:border-b-2 border-primary uppercase">Menu</li>
            <li className="hover:border-b-2 border-primary uppercase">About</li>
          </ul>
          <div className="flex gap-4 items-center">
            <img src={profile} alt="" className="w-10 rounded-full" />
            <IoIosArrowDown />
          </div>
        </div>
        {/*login section */}
      </div>
    </div>
  );
};

export default Navbar;
