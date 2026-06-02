import React, { useState } from "react";
import Button from "../Buttons";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../servicecard";
import testimonials from "./testimonials";
import wdImg from "../../assets/Wd.png";
import seoImg from "../../assets/seo.png";
import sommImg from "../../assets/smm.png";
import adsImg from "../../assets/ads.png";
import rect5 from "../../assets/Rectangle 5.png";
import rect61 from "../../assets/Rectangle 61.png";
import rect7 from "../../assets/Rectangle 7.png";
import group from "../../assets/Group 39550.png";
import blueJade from "../../assets/BlueJade.jpg";
import bongo from "../../assets/Bongo.jpg";
import littleSmart from "../../assets/little smart.jpg";
import menders from "../../assets/Menders.jpg";
import Checksquare from "../../assets/Checksquare.svg";
import Hand1 from "../../assets/Hand1.png";
import HAND2 from "../../assets/HAND2.png";
import HAND3 from "../../assets/HAND3.png";
import HAND4 from "../../assets/HAND4.png";
import TestImg from "../../assets/Image.png";

const Home = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <main className="px-4 md:p-40 flex flex-col justify-center items-center gap-40 w-full">
      <section className="flex flex-col gap-8 max-w-225 text-center items-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-extrabold">
            You Run the Business. We'll Bring the Customers
          </h1>
          <p>
            A website that converts visitors into customers, ads that reach the
            right people at the right time, social media that builds a brand
            they trust, and SEO that makes sure your business is the first one
            they find.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 mt-6">
          <Button onClick={() => console.log("open modal")}>
            Get Free Consultation
          </Button>
          <Button variant="secondary" onClick={() => navigate("/case-studies")}>
            View Case Studies
          </Button>
        </div>
      </section>

      <section className="h-128.75 flex items-stretch justify-between gap-4">
        <img className="h-150 w-100" src={rect5} alt="web design" />
        <img
          className="h-75 w-100"
          src={rect61}
          alt="social media management"
        />
        <img className="h-75 w-100" src={rect7} alt="SEO" />
        <img className="h-150 w-100" src={group} alt="Meta Ads" />
      </section>

      <section className="bg-[#B3C8CE] w-full p-6 flex flex-col gap-5 border-0 rounded-lg">
        <div>
          <p className="text-2xl">Trusted Partners:</p>
        </div>
        <div className="flex flex-row gap-10">
          <img className="w-20 h-20" src={blueJade} alt="BlueJade Logo" />
          <img className="w-20 h-20" src={bongo} alt="BongoGreeland Logo" />
          <img
            className="w-20 h-20"
            src={littleSmart}
            alt="Little Smart Academy logo"
          />
          <img className="w-20 h-20" src={menders} alt="Menders Shoe logo" />
        </div>
      </section>

      <section className="w-full flex justify-center">
        <div className="flex gap-6 flex-wrap justify-center">
          <ServiceCard
            title="Website Design & Development"
            description="Your website is your digital storefront. It's often the first impression a customer gets. We build fast, professional websites designed to turn visitors into paying customers."
            image={wdImg}
          />
          <ServiceCard
            title="SEO"
            description="When someone searches for what you offer, your business should be the first one they find. We optimise your online presence so the right customers find you — without you paying for every click."
            image={seoImg}
          />
          <ServiceCard
            title="Social Media Marketing"
            description="Your customers are on social media every day. We create and manage content that builds your brand, grows your audience, and keeps your business top of mind when they're ready to buy."
            image={sommImg}
          />
          <ServiceCard
            title="Paid Ads"
            description="Stop waiting for customers to find you — go to them. We run targeted ads on Facebook and Instagram that put your business in front of the right people at the right time, driving real enquiries and sales."
            image={adsImg}
          />
        </div>
      </section>
      <section className="w-full py-10 md:py-20 px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          {/* LEFT: Images */}
          {/* LEFT: Split Image */}
          <div className="flex flex-row gap-2 md:gap-4 justify-center lg:justify-start w-full overflow-hidden">
            <img
              className="w-1/4 max-w-30 md:max-w-35 lg:max-w-40 h-auto object-cover"
              src={Hand1}
              alt="split image 1"
            />

            <img
              className="w-1/4 max-w-30 md:max-w-35 lg:max-w-40 h-auto object-cover"
              src={HAND2}
              alt="split image 2"
            />

            <img
              className="w-1/4 max-w-30 md:max-w-35 lg:max-w-40 h-auto object-cover"
              src={HAND3}
              alt="split image 3"
            />

            <img
              className="w-1/4 max-w-30 md:max-w-35 lg:max-w-40 h-auto object-cover"
              src={HAND4}
              alt="split image 4"
            />
          </div>

          {/* RIGHT: Content Card */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div>
              <h3 className="font-black text-xl md:text-2xl">
                Let’s build something great together
              </h3>
            </div>

            {/* FEATURE CARDS WRAPPER */}
            <div className="flex flex-col gap-6">
              {/* Card 1 */}
              <div className="flex gap-4 bg-white border border-[#B3C8CE] rounded-lg p-5 md:p-6 shadow-sm">
                <img
                  className="w-8 h-8 shrink-0"
                  src={Checksquare}
                  alt="icon"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-base md:text-lg">
                    Your Growth is Our Goal
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    We measure success by results. Every decision we make is
                    driven by one question: is this bringing more customers to
                    your business?
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex gap-4 bg-white border border-[#B3C8CE] rounded-lg p-5 md:p-6 shadow-sm">
                <img
                  className="w-8 h-8 shrink-0"
                  src={Checksquare}
                  alt="icon"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-base md:text-lg">
                    You're Always in the Loop
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    No jargon, no radio silence. You'll always know what's
                    happening, what's working, and what's next — in plain
                    language that makes sense.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex gap-4 bg-white border border-[#B3C8CE] rounded-lg p-5 md:p-6 shadow-sm">
                <img
                  className="w-8 h-8 shrink-0"
                  src={Checksquare}
                  alt="icon"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-base md:text-lg">
                    Your Business Gets Real Attention
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    You're not a ticket in a queue. You get a dedicated team
                    that understands your business, listens to your goals, and
                    shows up like it's their own.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div>
              <Button onClick={() => console.log("open modal")}>
                Lets have a conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 md:px-10 lg:px-20">
        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-black mb-10">See our work</h2>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CARD 1 */}
          <div className="bg-white border border-[#B3C8CE] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <img
              src="image1.jpg"
              alt="case study 1"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <span className="font-semibold">Blue Jade Investment</span>
              <a
                href="/case-study-1"
                className="text-black hover:translate-x-1 transition"
              >
                ➜
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-[#B3C8CE] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <img
              src="image2.jpg"
              alt="case study 2"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <span className="font-semibold">Little Smart Academy</span>
              <a
                href="/case-study-2"
                className="text-black hover:translate-x-1 transition"
              >
                ➜
              </a>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-[#B3C8CE] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <img
              src="image3.jpg"
              alt="case study 3"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <span className="font-semibold">Menders Shoe Repair</span>
              <a
                href="/case-study-3"
                className="text-black hover:translate-x-1 transition"
              >
                ➜
              </a>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white border border-[#B3C8CE] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <img
              src="image4.jpg"
              alt="case study 4"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <span className="font-semibold">Bongo Greenland</span>
              <a
                href="/case-study-4"
                className="text-black hover:translate-x-1 transition"
              >
                ➜
              </a>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
          <Button
            onClick={() => console.log("open modal")}
            className="w-full md:w-auto"
          >
            Work with us
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate("/case-studies")}
            className="w-full md:w-auto"
          >
            See all Case Studies
          </Button>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-4 md:mx-20 bg-[url(/src/assets/TestBack.png)] p-6 md:p-20 bg-cover bg-repeat">
        <div className="bg-amber-50 flex flex-col gap-4 mt-10 mb-10 h-fit w-full md:w-fit p-6 md:p-20 justify-center items-center mx-auto">
          <h3 className="text-3xl font-black text-black">Testimonials</h3>

          <div className="flex flex-row gap-4 mt-10 justify-center items-center">
            {/* Prev */}
            <button
              onClick={prev}
              className="text-3xl text-cyan-800 font-bold hover:text-cyan-600 transition-colors px-2"
              aria-label="Previous"
            >
              ‹
            </button>

            {/* Slide */}
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
              <img
                className="h-75 w-50"
                src={testimonials[current].img}
                alt={testimonials[current].alt}
              />
              <div>
                <p className="opacity-90">"{testimonials[current].quote}"</p>
                <p className="text-cyan-800 mt-2">
                  — {testimonials[current].name}
                </p>
              </div>
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="text-3xl text-cyan-800 font-bold hover:text-cyan-600 transition-colors px-2"
              aria-label="Next"
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-cyan-800" : "bg-cyan-200"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
