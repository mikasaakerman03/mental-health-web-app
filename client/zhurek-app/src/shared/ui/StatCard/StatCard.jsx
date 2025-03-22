import React from "react";
import arrowIcon from "../../assets/icons/arrow_se_brown.png";

export const StatCard = ({ value, highlight, label }) => {
  return (
    <div className="flex justify-between items-center bg-white rounded-3xl shadow-md px-8 py-6 w-full max-w-[400px]">
      <div>
        <p className="text-4xl font-bold text-[#4F3422]">
          {value}
          <span className="text-[#FB8728]">{highlight}</span>
        </p>
        <p className="text-[#736B66] mt-1 text-sm font-medium">{label}</p>
      </div>
      <div className="bg-[#F5F5F5] p-3 rounded-full">
        <img src={arrowIcon} alt="arrow" className="w-4 h-4" />
      </div>
    </div>
  );
};
