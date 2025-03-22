import React from "react";
import "./styles.css";

export const PartnersCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#FB8728] rounded-3xl py-6 h-[150px] flex items-center justify-center">
      <div className="w-full overflow-hidden">
        <div className="partners-scroll flex items-center gap-16 whitespace-nowrap text-white text-4xl">
          <p className="font-anton uppercase">KazMunayGas</p>
          <p className="font-lora italic">Halyk Bank</p>
          <p className="font-orbitron tracking-wider">Kazatomprom</p>
          <p className="font-bebas">KEGOC</p>
          <p className="font-inter font-semibold">Kaspi.kz</p>

          {/* Дублирование для бесконечного скролла */}
          <p className="font-anton uppercase">KazMunayGas</p>
          <p className="font-lora italic">Halyk Bank</p>
          <p className="font-orbitron tracking-wider">Kazatomprom</p>
          <p className="font-bebas">KEGOC</p>
          <p className="font-inter font-semibold">Kaspi.kz</p>

        </div>
      </div>
    </div>
  );
};
