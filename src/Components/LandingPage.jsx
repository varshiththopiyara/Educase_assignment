import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
const navigate = useNavigate("/login")
  const images = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-[#F7F8F9] flex items-center justify-center">
      <div className="relative w-full max-w-sm h-175 bg-[#fffbeb] rounded-b-2xl shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[55%]">
          <img
            src={images[currentImage]}
            alt="hero"
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to PopX</h1>

          <p className="text-gray-500 mt-2 mb-8">
            Connect, explore, and get started with our app.
          </p>

          <div className="space-y-4">
            <button className="w-full bg-indigo-600 cursor-pointer text-white py-3 rounded-xl font-semibold" onClick={()=>navigate("/register")}>
              Create Account
            </button>

            <button className="w-full bg-[#6C25FF4B] cursor-pointer text-[#1D2226] py-3 rounded-xl font-semibold" onClick={()=>navigate("/login")}>
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
