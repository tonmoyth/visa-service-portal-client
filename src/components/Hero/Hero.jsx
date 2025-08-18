import React from "react";
import { Button } from "antd";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-60px)] flex justify-center items-center text-center  text-white py-20 px-6">
      {/* Background Image (optional) */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to Visa Service Portal
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Explore visa services, understand the process, and track your
          application progress easily.
        </p>
      <Link to='/services'>
          <Button type="primary" className="bg-[var(--background)]" size="large">
          Explore Services
        </Button>
      </Link>
        {/* <a
          href="/services"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
        >
          
        </a> */}
      </div>
    </section>
  );
};

export default Hero;
