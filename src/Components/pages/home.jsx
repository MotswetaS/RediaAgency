import React from "react";
import Button from "../Buttons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="p-40 flex flex-col justify-center items-center gap-40 w-full">
      <section className="flex flex-col gap-8 max-w-225 text-center items-center">
        {/* TEXT */}
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

        {/* BUTTONS */}
        <div className="flex flex-row justify-center items-center gap-4 mt-6">
          {/* PRIMARY */}
          <Button onClick={() => console.log("open modal")}>
            Get Free Consultation
          </Button>

          {/* SECONDARY */}
          <Button variant="secondary" onClick={() => navigate("/case-studies")}>
            View Case Studies
          </Button>
        </div>
      </section>
      <section className="h-128.75 flex items-stretch justify-between gap-4">
        <img
          className="h-150 w-100"
          src="src\assets\Rectangle 5.png"
          alt="web design"
          srcset=""
        />
        <img
          className="h-75 w-100"
          src="src\assets\Rectangle 61.png"
          alt="social media management"
          srcset=""
        />
        <img
          className="h-75 w-100"
          src="src\assets\Rectangle 7.png"
          alt="SEO"
          srcset=""
        />
        <img
          className="h-150 w-100"
          src="src\assets\Group 39550.png"
          alt="Meta Ads"
          srcset=""
        />
      </section>

      <section className=" bg-[#B3C8CE] w-full p-6 flex flex-col gap-5 border-0 rounded-lg">
        <div>
          <p className="text-2xl"> Trusted Partners:</p>
        </div>
        <div className="flex flex-row gap-10 ">
          <img
            className="w-20 h-20"
            src="src\assets\BlueJade.jpg"
            alt="BlueJade Logo"
          />
          <img
            className="w-20 h-20"
            src="src/assets/Bongo.jpg"
            alt="BongoGreeland Logo"
          />
          <img
            className="w-20 h-20"
            src="src\assets\little smart.jpg"
            alt="Little Smart Academy logo"
          />
          <img
            className="w-20 h-20"
            src="src\assets\Menders.jpg"
            alt="Menders Shoe logo"
          />
        </div>
      </section>
      <section>
        <div>
          <h4 className="font-extrabold">Website Design & Development</h4>
        </div>
      </section>
    </main>
  );
};

export default Home;
