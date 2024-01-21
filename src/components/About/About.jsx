import React, { useEffect } from "react";
import CarPng from "../../assets/q.png";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaHotel } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";

import { FaUsers } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa";
import { FaChild, FaTeenager, FaUser } from 'react-icons/fa';


const About = () => {
  return (
    
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300" >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              Dedicated to fostering a love for literature, our mission is to provide a diverse
               and enriching reading experience for adults, children, and teenagers alike.</p>
               <div className="flex items-center">
  
  <FaChildren className="text-3xl mr-2 text-blue-500" />

  <span className="text-lg">Children</span>
</div>
<div className="flex items-center">
  <FaUsers  data-aos="fade-up" className="text-3xl mr-2 text-green-500" />
  <span className="text-lg">Teenagers</span>
</div>
<div data-aos="slide-right" className="flex items-center">
  <FaUserSecret  className="text-3xl mr-2 text-red-500" />
  <span className="text-lg">Adults</span>
</div>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
