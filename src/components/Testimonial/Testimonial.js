import React from "react";
import { IoIosArrowForward as LeftArrow } from "react-icons/io";
import { IoIosArrowBack as RightArrow } from "react-icons/io";

import "./Testimonial.css";

export default function Testimonial() {
  return (
    <div>
      <h3 className="word-title">Testimonials</h3>
      <p className="words">
        "Calm, Serene, Retro – What a way to relax and enjoy"
      </p>
      <p className="copy-right">Mr. and Mrs. Baxter, UK</p>

      <div>
        <div className="left-arrow">
          <RightArrow />
        </div>
        <div className="right-arrow">
          <LeftArrow />
        </div>
      </div>
    </div>
  );
}
