import React from "react";

export const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col gap-4 shadow-md w-full h-full">
      <img src={image} alt={title} className="w-14 h-14" />
      <h3 className="text-lg font-bold text-[#3D2A1E]">{title}</h3>
      <p className="text-sm text-[#5A524A] leading-relaxed">{description}</p>
    </div>
  );
};

