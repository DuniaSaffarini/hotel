import React from "react";
import "./Rooms.css";
import Testimonial from "../Testimonial/Testimonial.js";
import Images from "../Images/Images.js";
import Text from "../Text/Text.js";

export default function Rooms() {
  return (
    <div>
      <Text
        title="ROOMS AND RATES"
        desc="Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, 
              comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented 
              by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. "
      />

      <Images count="3" query="rooms" />
      <Testimonial />
    </div>
  );
}
