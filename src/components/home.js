import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import HeroBG from '../assets/images/herobg.png';
import CircleBG from '../assets/images/circle-bg1.png';
import ManImg from '../assets/images/man.png';
import OneImg from '../assets/images/one.png';
import TwoImg from '../assets/images/two.png';
import ThreeImg from '../assets/images/three.png';
import FourImg from '../assets/images/four.png';
import OurGrowth from './ourgrowth';
import ProductServices from './productservices';
import CenterContact from '../assets/images/center-contact.png';
import CustomerCare from '../assets/images/customer-care.png';
import sliderImg1 from '../assets/images/slider1.png';
import sliderImg2 from '../assets/images/slider2.png';
import sliderImg3 from '../assets/images/slider3.png';
import sliderImg4 from '../assets/images/slider4.png';
import sliderImg5 from '../assets/images/slider5.png';
import sliderImg6 from '../assets/images/slider6.png';
import sliderImg7 from '../assets/images/slider7.png';
import sliderImg8 from '../assets/images/slider8.png';
import FaqSection from './faq';
import Testimonials from './testimonials';





function Home() {


// const Slider = [sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5, sliderImg6, sliderImg7, sliderImg8];
const Slider = [
  { src: sliderImg1, title: "First Slide" },
  { src: sliderImg2, title: "Second Slide" },
  { src: sliderImg3, title: "Third Slide" },
  { src: sliderImg4, title: "Fourth Slide" },
  { src: sliderImg5, title: "Fifth Slide" },
  { src: sliderImg6, title: "Sixth Slide" },
  { src: sliderImg7, title: "Seventh Slide" },
  { src: sliderImg8, title: "Eighth Slide" },
];

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




      <section className="px-6 py-8 " id="#our-growth">

        <div class="flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-6 sm:mb-8 md:mb-12">

          <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500"></span>
          <span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-800"></span>

          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold px-2
    bg-gradient-to-r from-orange-800 via-orange-800 to-orange-400
    bg-clip-text text-transparent text-center">
            Our Global Growth Journey
          </h2>

          <span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-800"></span>
          <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500"></span>
        </div>

        <p className="text-gray-600 leading-relaxed text-center text-sm">
          Our journey began in 2011 with the establishment of Lavanya Incorporation in Ghana. Through strategic planning and disciplined expansion, Lambodra Group evolved into a multi-national enterprise with diversified operations across trading, technology, and enterprise services.
        </p>


        <OurGrowth />


      </section>

      <section className="px-6 py-8 bg-orange-100" id="product-services">
        <div class="flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-6 sm:mb-8 md:mb-12">

          <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500"></span>
          <span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-800"></span>

          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold px-2
    bg-gradient-to-r from-orange-800 via-orange-800 to-orange-400
    bg-clip-text text-transparent text-center">
            Products and Services That Power Businesses
          </h2>

          <span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-800"></span>
          <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500"></span>
        </div>

        <ProductServices />
      </section>

      
      
{/* What our Customer says */}
<Testimonials/>
<section className="px-6 sm:px-8 md:px-12 py-10 md:py-14 bg-orange-100">
        <div
          className="w-full bg-orange-600 bg-cover bg-center rounded-3xl flex flex-col md:flex-row items-center md:justify-between px-6 md:px-10 py-3 text-white shadow-lg space-y-6 md:space-y-0 md:space-x-6"
          style={{ backgroundImage: `url(${CenterContact})` }}
        >
          <div className="flex-shrink-0">
            <img src={CustomerCare} alt="Customer Care" className="w-34 h-32 md:w-34 md:h-32" />
          </div>

          <div className="text-center md:text-left leading-tight">
            <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
            <p className="text-sm mt-2">
              24/7 Expert Hosting<br />
              Support Our Customers Love
            </p>
          </div>

          <div>
           <Link
  to="/contact"
  className="bg-white text-orange-600 font-semibold px-6 md:px-7 py-3 rounded-full shadow-lg transition duration-300 hover:bg-orange-600 hover:text-white w-full md:w-48 inline-block text-center"
>
  Let’s Connect →
</Link>
          </div>
        </div>
</section>
      {/* Awards and certifications section */}
      <section className="px-6 py-8" id="awards-certifications">
       <div class="flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-6 sm:mb-8 md:mb-12">

          <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500"></span>
          <span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-800"></span>

          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold px-2
    bg-gradient-to-r from-orange-800 via-orange-800 to-orange-400
    bg-clip-text text-transparent text-center">   Awards and Certifications </h2>
          <span class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-800"></span>
          <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500"></span>
        </div>


    <div className="relative w-full overflow-hidden">
      <div className="flex w-max gap-4 md:gap-6 animate-scroll py-6 pb-8">
       {Slider.map((slide, i) => (
  <img key={i} src={slide.src} alt={slide.title} className="w-64 h-64 object-contain" />
  
))}
      </div>
    </div>
      </section>

{/* FAQ Section */}
<section className="px-6 py-8 bg-orange-100" id="FAQSection">
<FaqSection/>
      </section>

    </div>
  );
}

export default Home;
