import React, { useEffect } from 'react';
import HeroBG from '../assets/images/herobg.png'; 
import CircleBG from '../assets/images/circle-bg.png'; 
import ManImg from '../assets/images/man.png'; 
import OneImg from '../assets/images/one.png'; 
import TwoImg from '../assets/images/two.png'; 
import ThreeImg from '../assets/images/three.png';  
import FourImg from '../assets/images/four.png'; 
import OurGrowth from './ourgrowth';
import ProductServices from './productservices';
import CenterContact from '../assets/images/center-contact.png';
import CustomerCare from '../assets/images/customer-care.png'; 

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const circle = document.getElementById("circle-bg");
      if (circle) {
        circle.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
 <div
  className="min-h-screen w-full text-white font-sans bg-[#f9650b] shadow-md overflow-hidden"
  style={{
    backgroundImage: `url(${HeroBG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>
  {/* Hero Section */}
  <section
    className="
      flex flex-col
      lg:flex-row
      items-center
      justify-between
      px-5
      sm:px-8
      md:px-12
      lg:px-16
      py-8
      md:py-10
      lg:py-6
      gap-10
      lg:gap-4
      max-w-7xl
      mx-auto
    "
  >
    {/* ================= LEFT CONTENT ================= */}
    <div
      className="
        w-full
        lg:w-1/2
        max-w-xl
        space-y-5
        md:space-y-6
        text-center
        lg:text-left
      "
    >
      {/* Top Tagline */}
      <div
        className="
          bg-orange-600
          inline-flex
          items-center
          justify-center
          px-4
          sm:px-6
          py-2
          rounded-2xl
          text-xs
          sm:text-sm
          font-semibold
          tracking-wide
          border-2
          border-white
          gap-2
          max-w-full
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="24"
          height="24"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <polyline points="2,32 12,32 20,12 28,52 36,24 44,44 54,32 62,32" />
        </svg>

        <span>
          Technology • Software • Infrastructure
        </span>
      </div>

      {/* Main Heading */}
      <h2
        className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-4xl
          xl:text-5xl
          font-extrabold
          leading-tight
        "
      >
        We Convert Concepts Into Technologies.
      </h2>

      {/* Feature Cards */}
      <section
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-3
          sm:gap-4
          px-0
          py-2
        "
      >
        {/* Card 1 */}
        <div
          className="
            p-3
            sm:p-4
            bg-white
            rounded-xl
            shadow-lg
            text-gray-800
            min-h-[70px]
            flex
            items-center
            transition
            duration-300
            hover:-translate-y-1
          "
        >
          <h3 className="flex items-center font-normal text-orange-600 text-sm sm:text-base">
            <img
              src={OneImg}
              alt="Deployment and Support"
              className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 mr-2"
            />

            <span>
              Deployment and Support
            </span>
          </h3>
        </div>

        {/* Card 2 */}
        <div
          className="
            p-3
            sm:p-4
            bg-white
            rounded-xl
            shadow-lg
            text-gray-800
            min-h-[70px]
            flex
            items-center
            transition
            duration-300
            hover:-translate-y-1
          "
        >
          <h3 className="flex items-center font-normal text-orange-600 text-sm sm:text-base">
            <img
              src={TwoImg}
              alt="Competitive Advantage"
              className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 mr-2"
            />

            <span>
              Competitive Advantage
            </span>
          </h3>
        </div>

        {/* Card 3 */}
        <div
          className="
            p-3
            sm:p-4
            bg-white
            rounded-xl
            shadow-lg
            text-gray-800
            min-h-[70px]
            flex
            items-center
            transition
            duration-300
            hover:-translate-y-1
          "
        >
          <h3 className="flex items-center font-normal text-orange-600 text-sm sm:text-base">
            <img
              src={ThreeImg}
              alt="Flexibility and Adaptability"
              className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 mr-2"
            />

            <span>
              Flexibility and Adaptability
            </span>
          </h3>
        </div>

        {/* Card 4 */}
        <div
          className="
            p-3
            sm:p-4
            bg-white
            rounded-xl
            shadow-lg
            text-gray-800
            min-h-[70px]
            flex
            items-center
            transition
            duration-300
            hover:-translate-y-1
          "
        >
          <h3 className="flex items-center font-normal text-orange-600 text-sm sm:text-base">
            <img
              src={FourImg}
              alt="Discovery and Analysis"
              className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 mr-2"
            />

            <span>
              Discovery and Analysis
            </span>
          </h3>
        </div>
      </section>

      {/* CTA Button */}
      <div className="pt-2">
        <button
          className="
            bg-white
            text-orange-600
            font-semibold
            px-7
            py-3
            rounded-full
            shadow-lg
            transition
            duration-300
            hover:bg-orange-600
            hover:text-white
            animate-moveRight
            w-44
            sm:w-auto
          "
        >
          Get Started →
        </button>
      </div>
    </div>

    {/* ================= RIGHT IMAGE ================= */}
    <div
      className="
        relative
        w-72
        h-72
        sm:w-80
        sm:h-80
        md:w-96
        md:h-96
        lg:w-96
        lg:h-96
        mt-4
        md:mt-6
        lg:mt-0
        shrink-0
      "
    >
      {/* Rotating Circle Background */}
      <div
        id="circle-bg"
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${CircleBG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Static Man Image */}
      <img
        src={ManImg}
        alt="Man"
        className="
          relative
          z-10
          w-52
          sm:w-60
          md:w-72
          lg:w-72
          h-auto
          object-cover
          rounded-full
          mx-auto
          pt-4
        "
      />
    </div>
  </section>
</div>




      <section className="px-12 py-8 " id="#our-growth">
        <div className="text-2xl font-bold mb-4 text-center uppercase bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">
  Our Global Growth Journey
</div>
<p className="text-gray-600 leading-relaxed text-center">
  Our journey began in 2011 with the establishment of Lavanya Incorporation in Ghana. Through strategic planning and disciplined expansion, Lambodra Group evolved into a multi-national enterprise with diversified operations across trading, technology, and enterprise services.
</p>


<OurGrowth />


      </section>

      <section className="px-12 py-14 bg-orange-100"  id="product-services">

  <div className="text-2xl font-bold mb-10 text-center uppercase bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">
 Products and Services That Power Businesses
</div>
<ProductServices />
      </section>


<section className="px-4 sm:px-8 md:px-12 py-10 md:py-14">
  <div
    className="w-full bg-orange-600 bg-cover bg-center rounded-3xl flex flex-col md:flex-row items-center md:justify-between px-6 md:px-10 py-0 text-white shadow-lg space-y-6 md:space-y-0 md:space-x-6"
    style={{ backgroundImage: `url(${CenterContact})` }}
  >
    {/* Left Section - Image */}
    <div className="flex-shrink-0">
      <img src={CustomerCare} alt="Customer Care" className="w-34 h-32 md:w-34 md:h-32" />
    </div>

    {/* Middle Section - Text */}
    <div className="text-center md:text-left leading-tight">
      <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
      <p className="text-sm mt-2">
        24/7 Expert Hosting<br />
        Support Our Customers Love
      </p>
    </div>

    {/* Right Section - Button */}
    <div>
      <button
        className="bg-white text-orange-600 font-semibold px-6 md:px-7 py-3 rounded-full shadow-lg transition duration-300 hover:bg-orange-600 hover:text-white w-full md:w-48"
      >
        Let’s Connect →
      </button>
    </div>
  </div>
</section>

      
      </div>
  );
}

export default Home;
