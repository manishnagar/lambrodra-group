import React, { useEffect, useState } from "react";

const milestones = [
  { year: 2011, text: "Lavanya Incorporation – India" },
  { year: 2016, text: "Lambodra Enterprises (GH) Limited – Ghana" },
  { year: 2023, text: "Lambodra Enterprises Nigeria Limited – Nigeria" },
  { year: 2024, text: "Kshipra Fugen Pvt Ltd – Zambia" },
  { year: 2025, text: "Lambodra Traders & Services Pvt Ltd – New Delhi, India" },
  { year: 2026, text: "AdepTraders Solution and Media LTD – Ghana" },
];

function OurGrowth() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".timeline-item");

      let index = 0;

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight / 2) {
          index = i;
        }
      });

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-8 sm:py-10 md:py-12">

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Gray Vertical Line */}
        <div
          className="
            absolute
            top-0
            bottom-0
            left-6
            sm:left-8
            md:left-1/2
            md:-translate-x-1/2
            w-1
            bg-gray-300
            rounded-full
          "
        >

          {/* Orange Progress Line */}
          <div
            className="
              absolute
              top-0
              left-0
              w-1
              bg-orange-600
              rounded-full
              transition-all
              duration-500
            "
            style={{
              height: `${((activeIndex + 1) / milestones.length) * 100}%`,
            }}
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-12 sm:space-y-16 md:space-y-24">

          {milestones.map((m, i) => (
            <div
              key={i}
              className="
                timeline-item
                relative
                min-h-[100px]
                sm:min-h-[110px]
                md:min-h-[120px]
                flex
                items-center
              "
            >

              {/* Circle */}
              <div
                className={`
                  absolute
                  left-6
                  sm:left-8
                  md:left-1/2
                  md:-translate-x-1/2
                  -translate-x-1/2
                  w-5
                  h-5
                  sm:w-6
                  sm:h-6
                  rounded-full
                  border-4
                  z-10
                  transition-all
                  duration-500
                  ${
                    i <= activeIndex
                      ? "bg-orange-600 border-orange-600"
                      : "bg-white border-gray-400"
                  }
                `}
              />

              {/* Timeline Content */}
              <div
                className={`
                  w-full
                  pl-14
                  sm:pl-16
                  md:pl-0
                  md:w-1/2
                  flex
                  ${
                    i % 2 === 0
                      ? "md:justify-end md:pr-12"
                      : "md:justify-start md:ml-auto md:pl-12"
                  }
                `}
              >

                {/* Card */}
                <div
                  className={`
                    w-full
                    max-w-md
                    p-4
                    sm:p-5
                    rounded-xl
                    shadow-md
                    border
                    transition-all
                    duration-500
                    ${
                      i <= activeIndex
                        ? "bg-orange-100 border-orange-300"
                        : "bg-white border-gray-200"
                    }
                  `}
                >

                  {/* Year */}
                  <h3
                    className="
                      font-bold
                      text-lg
                      sm:text-xl
                      md:text-2xl
                      text-orange-700
                      mb-1
                    "
                  >
                    {m.year}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-gray-600
                      text-xs
                      sm:text-sm
                      md:text-base
                      leading-5
                      sm:leading-6
                    "
                  >
                    {m.text}
                  </p>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default OurGrowth;