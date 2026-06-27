import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { fullName, phone, email, password } = formData;

    if (!fullName || !phone || !email || !password) {
      toast.error("Please fill all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (phone.length < 10) {
      toast.error("Phone must contain 10 numbers in it");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    

    toast.success("Account created successfully 🎉");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F7F8F9] flex justify-center">
      <div className="w-full max-w-sm border border-gray-200 bg-[#F7F8F9] px-5 pt-8 pb-24 relative">
        <h1 className="text-4xl font-bold text-[#1D2226] leading-tight mb-8">
          Create your <br />
          PopX account
        </h1>

        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-sm text-[#6C25FF]">
            Full Name<span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Marry Doe"
            className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none"
          />
        </div>

        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-sm text-[#6C25FF]">
            Phone number<span className="text-red-500">*</span>
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876543210"
            className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none"
          />
        </div>

        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-sm text-[#6C25FF]">
            Email address<span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none"
          />
        </div>

        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-sm text-[#6C25FF]">
            Password<span className="text-red-500">*</span>
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none"
          />
        </div>

        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-sm text-[#6C25FF]">
            Company name
          </label>

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none"
          />
        </div>

        <div className="mb-5">
          <p className="text-sm text-[#1D2226] mb-3">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="agency"
                checked={formData.isAgency === "yes"}
                onChange={() => setFormData({ ...formData, isAgency: "yes" })}
                className="w-4 h-4 accent-[#6C25FF]"
              />
              Yes
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="agency"
                checked={formData.isAgency === "no"}
                onChange={() => setFormData({ ...formData, isAgency: "no" })}
                className="w-4 h-4 accent-[#6C25FF]"
              />
              No
            </label>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="absolute bottom-6  mt-10 left-5 right-5 h-12 rounded-md bg-[#6C25FF] text-white font-semibold hover:bg-[#5b1ff5]"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Register;
