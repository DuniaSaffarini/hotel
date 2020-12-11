import React from "react";
import "./Text.css";
export default function Text(props) {
  return (
    <div>
      <div
        style={{
          marginTop: "90px",
          marginBottom: "50px",
        }}
      >
        <div className="title1">{props.title}</div>

        <div className="desc1">{props.desc}</div>
      </div>
    </div>
  );
}
