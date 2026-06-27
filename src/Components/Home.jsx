import React from "react";
import Camera from "../assets/Camera.svg";
import ProfileImage from "../assets/ProfileImage.png";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-[#F7F8F9] flex justify-center">
      <div className="w-full max-w-sm  bg-[#F7F8F9]">
        <div className="bg-white px-4 py-5 shadow-sm">
          <h1 className="text-2xl font-medium text-[#1D2226]">
            Account Settings
          </h1>
        </div>

        <div className="px-5 py-8">
          <div className="flex items-start gap-4">
            <div className="relative">
              <img
                src={ProfileImage}
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
              />

              <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#6C25FF] flex items-center justify-center">
                <img src={Camera} alt="camera" className="w-6 h-6" />
              </div>
            </div>

            <div>
              <h2 className="font-bold text-xl text-[#1D2226]">
                {user?.fullName || "Marry Doe"}
              </h2>

              <p className="text-[#1D2226] mt-1">
                {user?.email || "Marry@gmail.com"}
              </p>
            </div>
          </div>

          <p className="mt-8 text-[#1D2226] leading-8">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        <div className="border-b border-dashed border-gray-300 mx-4"></div>
        <div className="mt-16 px-6">
          <p className="text-center text-sm text-[#919191] italic">
            We're working on something amazing.
            <br />
            Stay tuned for upcoming features ✨
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
