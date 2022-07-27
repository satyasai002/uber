import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router";

function NavBar() {
  function userRemover(){
     localStorage.clear();
  }
  return (
    <div>
      <body className="bg-black">
        <nav className="relatve container p-2 mx-auto">
          <div className="flex items-center justify-between">
            <div className="pt-1 text-white w-96">
              <NavLink to='/' className="text-3xl font-semibold hover:cursor-default">
                Uber
              </NavLink>
            </div>
            <div className="hidden md:flex space-x-7">
              <NavLink
                to='/myrides'
                name="/myrides"
                className="font-semibold hover:font-bold  text-white hover:underline"
              >
                MyRides
              </NavLink>
              <NavLink
                to="/newride"
                className="font-semibold hover:font-bold  text-white hover:underline"
              >
                NewRide
              </NavLink>
              <NavLink
                to="/aboutus"
                className="font-semibold hover:font-bold text-white  hover:underline"
              >
                AboutUs
              </NavLink>
              <NavLink
                to="/myprofile"
                className="font-semibold hover:font-bold   text-white hover:underline"
              >
                MyProfile
              </NavLink>
            </div>
            <div className="hidden lg:flex px-0 space-x-4 mx-0">
              <NavLink
                to="/signin"
                className="p-3 mx-auto px-6 pt-2 rounded-full outline ouline-offset-2 outline-1  bg-white hover:text-black hover:bg-[#dddbdb]"
              >
                SignIn
              </NavLink>
              <NavLink
                to="/login"
                onClick={userRemover()}
                className="p-3 px-6 pt-2 rounded-full outline ouline-offset-2 outline-1  bg-white hover:text-black hover:bg-[#dddbdb]"
              >
                log In
              </NavLink>
            </div>
          </div>
        </nav>
      </body>
    </div>
  );
}

export default NavBar;
