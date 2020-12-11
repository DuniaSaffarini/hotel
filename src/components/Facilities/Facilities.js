import React from "react";
import "./Facilities.css";
import Testimonial from "../Testimonial/Testimonial.js";
import Images from "../Images/Images.js";
import Text from "../Text/Text.js";

export default function Facilities() {
  return (
    <div style={{ height: "8385px" }}>
      <div>
        <Text
          title="FACILITIES"
          desc="We want your stay at our lush hotel to be truly unforgettable.
                        That is why we give special attention to all of your needs so that we can ensure an experience
                        quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure and our
                        modern luxury resort facilities will help you enjoy the best of all."
        />

        <div className="image-container">
          <Images count="6" query="hotel" />
        </div>
        <Testimonial />
      </div>
    </div>
  );
}
