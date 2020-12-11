import React from "react";
import BUTTON from "../BUTTON.js";
import "./Home.css";
import logo from "../../img/img4.png";

import Testimonial from "../Testimonial/Testimonial.js";
export default function Home(props) {
  return (
    <div style={{ height: "1924px" }}>
      <p style={{ marginTop: "93px", color: "#14274a", fontSize: "40px" }}>
        All room types including complementary breakfast
      </p>
      <Example
        img="first"
        title="Luxury redefined"
        description="Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself."
      />
      <Example
        img="second"
        title="Leave your worries in the sand"
        description="We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean."
      />
      <div>
        <Testimonial />
      </div>
    </div>
  );
}

function Example(props) {
  return (
    <div className={`txt ${props.img === "first" ? "img1" : "img2"}`}>
      <div style={{}}>
        <div
          style={{
            width: "27%",
            display: "inline-block",
            paddingLeft: "50px",
            borderLeft: "3px solid black",
            verticalAlign: "top",
            marginTop: "50px",
          }}
        >
          <h3 className="img-title">{props.title}</h3>
          <p className="img-des">{props.description}</p>
          <div style={{ marginTop: "37px", textAlign: "left", width: "20%" }}>
            <BUTTON title="EXPLORE" />
          </div>
        </div>
        <div style={{ display: "inline-block" }}>
          <img style={{ width: "85%", height: "30%" }} src={logo} alt="img" />
        </div>
      </div>
    </div>
  );
}
