import React, { useState } from "react";

import CloudIcon from "../assets/images/cloud.png";
import NetworkIcon from "../assets/images/network.png";
import ErpIcon from "../assets/images/erp.png";
import TelecomIcon from "../assets/images/telecomunicatiob.png";
import HardwareIcon from "../assets/images/hardware.png";
import GpsIcon from "../assets/images/GPS.png";

function ProductServices() {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: CloudIcon,
      title: "Cloud & Web Solution",
      desc: "Designing and deploying scalable digital platforms for modern businesses.",
    },
    {
      icon: NetworkIcon,
      title: "Network & Security",
      desc: "Protecting infrastructure, data, and communication with enterprise-grade security.",
    },
    {
      icon: ErpIcon,
      title: "ERP & Software Solution",
      desc: "Streamlining business operations with reliable software and collaboration tools.",
    },
    {
      icon: TelecomIcon,
      title: "Telecommunication Solution",
      desc: "Ensuring seamless business communication and connectivity.",
    },
    {
      icon: GpsIcon,
      title: "Vehicle Tracking Solution",
      desc: "Real-time tracking and intelligent fleet management systems.",
    },
    {
      icon: HardwareIcon,
      title: "Computer Hardware",
      desc: "Supplying dependable IT hardware and infrastructure for business operations.",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section
      id="product-services"
      className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10"
    >
      {/* Services Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          sm:gap-6
          lg:gap-8
          w-full
          max-w-6xl
          mx-auto
        "
      >
        {visibleServices.map((s, i) => (
          <div
            key={i}
            className="
              w-full
              min-h-[280px]
              bg-white
              rounded-2xl
              border
              border-orange-600
              shadow-md
              p-5
              sm:p-6
              flex
              flex-col
              items-center
              text-center
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-4">
              <img
                src={s.icon}
                alt={s.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </div>

            {/* Title */}
            <h3
              className="
                text-lg
                sm:text-xl
                font-bold
                mb-3
                text-gray-900
                leading-snug
              "
            >
              {s.title}
            </h3>

            {/* Description */}
            <p
              className="
                text-gray-700
                text-sm
                sm:text-sm
                leading-6
                mb-6
                max-w-sm
              "
            >
              {s.desc}
            </p>

            {/* Button */}
            <button
              className="
                mt-auto
                bg-orange-600
                text-white
                px-5
                py-2
                rounded-full
                font-medium
                text-xs
                sm:text-sm
                hover:bg-orange-700
                active:scale-95
                transition
                duration-200
              "
            >
              Get a Quote
            </button>
          </div>
        ))}
      </div>

      {/* View More / Less */}
      <div className="flex justify-center mt-7 sm:mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="
            bg-orange-600
            text-white
            px-6
            sm:px-8
            py-2.5
            rounded-full
            font-semibold
            text-sm
            sm:text-base
            hover:bg-orange-700
            active:scale-95
            transition
            duration-200
          "
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
}

export default ProductServices;