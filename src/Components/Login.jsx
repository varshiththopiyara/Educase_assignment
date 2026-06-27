import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const storedUser = JSON.parse(localStorage.getItem("user"));

  // if (!storedUser) {
  //   toast.error("Please register first");
  //   return;
  // }

  // if (storedUser.email === email && storedUser.password === password) {
  //   toast.success("Login Successful 🎉");
  //   navigate("/home");
  // } else {
  //   toast.error("Invalid Credentials");
  //   setTimeout(()=>{
  //     navigate("/register")
  //   },1000)
  // }

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      toast.error("Please register first");
      setTimeout(() => navigate("/register"), 1000);
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      toast.success("Login Successful 🎉");

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      toast.error("Invalid Credentials, Register yourself");
      setTimeout(() => navigate("/register"), 1000);
    }
  };
  return (
    <div className="min-h-screen bg-[#F7F8F9] flex justify-center">
      <div className="w-full max-w-sm rounded-2xl shadow-2xl bg-[#fffbeb] px-5 pt-12">
        <h1 className="text-4xl font-bold text-[#1D2226] leading-tight">
          Signin to your <br />
          PopX account
        </h1>

        <p className="text-gray-500 text-lg mt-4 mb-8">
          Please enter your Email and Password
          <br />
          to navigate further...✨
        </p>

        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-sm text-[#6C25FF]">
            Email Address <span className="text-red-600">*</span>
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none"
          />
        </div>

        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-sm text-[#6C25FF]">
            Password <span className="text-red-600">*</span>
          </label>

          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none"
          />
        </div>

        <button
          onClick={handleLogin}
          //   disabled={!email || !password}
          className="w-full h-12 rounded-md cursor-pointer text-white font-semibold transition-all bg-[#6C25FF] hover:bg-[#5b1ff5]"
        >
          Login
        </button>
        {/* <button onClick={()=>navigate("/register")} className="w-full h-12 mt-5 rounded-md cursor-pointer text-white font-semibold transition-all bg-[#6C25FF] hover:bg-[#5b1ff5]">
          Register
        </button> */}
      </div>
    </div>
  );
}

export default Login;
