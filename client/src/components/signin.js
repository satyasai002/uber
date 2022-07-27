import React, { useState } from "react";
import axios from "axios";
import { Navigate, NavLink, Route, useNavigate } from "react-router-dom";

function Signin() {
  let navigate = useNavigate();
  const [data, setData] = useState({
    UserName: "",
    Email: "",
    Mobile: "",
    Password: "",
    ConfirmPassword: "",
  })
  const passData = ({
    Email: data.Email,
    Password:data.Password,
  });
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios.post('http://localhost:5000/signin',data).then(
      res => {alert(res.data);setData({
        UserName: '',
        Email: '',
        Mobile:'',
        Password: '',
        ConfirmPassword: '',
      });}
    )
    console.log(passData)
     axios
       .post("http://localhost:5000/userlogin", passData)
       .then((res) => localStorage.setItem("token", res.data.token));
     if (localStorage.getItem("token")) {
       return navigate("/");
     }
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-3/5 p-5">
              <div className="text-left text-4xl font-semibold">
                <span>Uber</span>
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold text-black mb-2">
                  Create Account
                </h2>
                <div className="border-2 w-10 bg-black border-black inline-block mb-2"></div>
                <form onSubmit={submitHandler} autoComplete="off">
                  <div className="pt-4 flex">
                    <input
                      className="w-80 mx-2 lg:w-96 p-4 inputbox   hover:outline-2"
                      type="text"
                      onChange={changeHandler}
                      name="UserName"
                      placeholder="Name"
                    />
                    <br />
                  </div>
                  <div className="pt-2 flex">
                    <input
                      className="w-80 mx-2 lg:w-96 inputbox p-4 hover:outline-2"
                      type="email"
                      onChange={changeHandler}
                      name="Email"
                      placeholder="Email"
                    />
                    <br />
                  </div>
                  <div className="pt-2 flex">
                    <input
                      className="w-80 mx-2 lg:w-96 inputbox p-4 hover:outline-2"
                      type="text"
                      onChange={changeHandler}
                      name="Mobile"
                      placeholder="Mobile"
                    />
                    <br />
                  </div>
                  <div className="pt-2 flex">
                    <input
                      className="w-80 mx-2 lg:w-96 inputbox p-4 hover:outline-2"
                      type="password"
                      onChange={changeHandler}
                      name="Password"
                      placeholder="Password"
                    />
                    <br />
                  </div>
                  <div className="pt-2 flex">
                    <input
                      className="w-80 mx-2 lg:w-96 inputbox p-4 hover:outline-2"
                      type="password"
                      onChange={changeHandler}
                      name="ConfirmPassword"
                      placeholder="Confirm Password"
                    />
                    <br />
                  </div>
                  <div className="ml-20 mt-2 flex justify-between w-64 mb-5">
                    <label className="flex items-center text-xs">
                      <input
                        type="checkbox"
                        name="remember me"
                        className="mr-1"
                      />
                      Remember me
                    </label>
                  </div>
                  <div>
                    <a
                      type="submit"
                      className="border-2 border-black rounded-full px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white"
                    >
                      Sign Up
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-2/5 bg-black text-white rounded-tr-2xl rounded-br-2xl py-40 px-12">
              <h2 className="text-3xl font-semibold md-2">
                Aready have a account!!
              </h2>
              <div className="border-2 w-10 justify-center bg-white border-white inline-block mb-2"></div>
              <p className="mb-10">
                {" "}
                Uber The best way to travel to your destination
              </p>
              <NavLink
                    to='/login'
                href=""
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
