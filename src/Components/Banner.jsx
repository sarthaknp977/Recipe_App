import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-green-700 to-yellow-500 mb-8">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsuperherointhekitchen.com%2Fwp-content%2Fuploads%2F2019%2F02%2Frecipes-banner.jpg&f=1&nofb=1&ipt=8d23f32eaab5772e829d7bff61135508bb927f7507915d20acf465baaffe9dc9&ipo=images"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;
