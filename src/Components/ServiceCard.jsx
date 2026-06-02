import React from "react";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div
      className="group relative w-100 h-100 rounded-lg overflow-hidden cursor-pointer bord"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* YELLOW OVERLAY - only on hover */}
      <div className="absolute inset-0 bg-[#FFC71F] opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {/* TITLE - always visible */}
        <h4 className="text-xl font-extrabold text-black">{title}</h4>

        {/* SHOWS ON HOVER ONLY */}
        <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-black">
          <p className="mb-4">{description}</p>
          <button className="underline font-semibold">Learn More →</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
