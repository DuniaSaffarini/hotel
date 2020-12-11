import React from "react";
import "./FirstPage.css";
import BUTTON from "..//BUTTON.js";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { useState } from "react";

export default function FirstPage() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollBottom = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  const scrollBottom = () => {
    window.scrollTo({ top: 1200, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollBottom);

  return (
    <div>
      <div className="text-dim">
        <p style={{ fontSize: "51px", marginBottom: "0px" }}>WELCOME TO</p>
        <p
          style={{
            fontSize: "140px",
            fontFamily: "serif",
            marginBottom: "0px",
            marginTop: "0px",
          }}
        >
          LUXURY
        </p>
        <p
          style={{
            fontSize: "52px",
            marginBottom: "0px",
            marginTop: "0px",
            letterSpacing: "27px",
            fontFamily: "serif",
          }}
        >
          HOTELS
        </p>

        <p style={{ marginBottom: "0px", marginTop: "0px", fontSize: "30px" }}>
          Book your stay and enjoy luxury
          <br />
          redefined at the most affordable rates
        </p>
      </div>
      <div style={{ marginTop: "100px" }}>
        <BUTTON icon="true" title="BOOK NOW"></BUTTON>
      </div>
      <div style={{ marginTop: "80px" }}>
        <p style={{ color: "white", fontSize: "27px" }}> Scroll</p>
        <ArrowDropDownCircleIcon
          className="scrollBottom"
          onClick={scrollBottom}
          style={{ color: "white", fontSize: "72px" }}
        />
      </div>

      <div></div>
    </div>
  );
}
