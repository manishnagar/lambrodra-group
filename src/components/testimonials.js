import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Chinedu Okafor",
    feedback:
      "We implemented Lambodra Group’s VOIP and IP PBX cloud calling solution in Nigeria. Call quality improved, downtime reduced, and we achieved nearly 30% cost savings.",
    service: "VOIP & Telecommunication Solutions – Nigeria",
    image: "https://lambodragroup.com/wp-content/uploads/2026/02/03.jpg",
  },
  {
    name: "Ahmed Al Maktoum",
    feedback:
      "Lambodra Group delivered ERP and Microsoft business solutions in Dubai. Finance, inventory, and reporting streamlined, errors reduced by 40%, and management visibility improved.",
    service: "ERP & Microsoft Business Solutions – Dubai",
    image: "https://lambodragroup.com/wp-content/uploads/2026/02/02.jpg",
  },
  {
    name: "Jason Miller",
    feedback:
      "We adopted Lambodra Group’s cloud computing and web solutions in Canada. Secure, scalable, and smooth deployment with DevOps support ensured reliable performance.",
    service: "Cloud Computing & Web Solutions – Canada",
    image: "https://lambodragroup.com/wp-content/uploads/2026/02/05.jpg",
  },
  {
    name: "Anna Kowalska",
    feedback:
      "Lambodra Group installed a robust CCTV and security surveillance system in Poland for our warehouse operations. Monitoring efficiency improved, incidents reduced, and their support team is highly responsive.",
    service: "CCTV & Security Solutions – Poland",
    image: "https://lambodragroup.com/wp-content/uploads/2026/02/03.jpg",
  },
  {
    name: "Kwame Mensah",
    feedback:
      "Lambodra Group delivered a complete IT infrastructure and network security solution in Ghana for our corporate office. Their Fortigate firewall and network setup improved system stability and ensured 99.8% uptime.",
    service: "Network Security & IT Infrastructure – Ghana",
    image: "https://lambodragroup.com/wp-content/uploads/2026/02/05.jpg",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16">
   
        <div class="flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-6 sm:mb-8 md:mb-12">

          <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500"></span>
          <span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-800"></span>

          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold px-2
    bg-gradient-to-r from-orange-800 via-orange-800 to-orange-400
    bg-clip-text text-transparent text-center"> Our Latest Client Feedback </h2>
          <span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-800"></span>
          <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500"></span>
        </div>
        <div className="overflow-hidden relative max-w-md mx-auto">
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${index * 100}%)` }}
  >
    {testimonials.map((t, i) => (
      <div key={i} className="w-full flex-shrink-0 px-6">
        <div className="bg-orange-100 rounded-xl shadow-lg p-6 flex flex-col items-center text-center relative">
          {/* Stars */}
          <div className="flex justify-center mb-4 text-orange-600">
            {"★★★★★"}
          </div>

          {/* Feedback */}
          <p className="text-gray-700 text-sm italic mb-6">
            “{t.feedback}”
          </p>

          {/* Client Info */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src={t.image}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-orange-600"
            />
            <h5 className="font-semibold text-orange-700">{t.name}</h5>
            <span className="text-gray-600 text-xs">{t.service}</span>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Navigation Buttons */}
<button
  onClick={prevSlide}
  className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-orange-600 text-white rounded-full transition hover:bg-white hover:text-orange-600 hover:shadow-xl"
>
  {/* Prev Arrow */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>

<button
  onClick={nextSlide}
  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-orange-600 text-white rounded-full transition hover:bg-white hover:text-orange-600 hover:shadow-xl"
>
  {/* Next Arrow */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</button>

</div>

    </section>



  );
}

export default Testimonials;
