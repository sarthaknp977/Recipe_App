import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-green-700 to-yellow-500 mb-8">
      <img
        src="./public/banner.jpg"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;
