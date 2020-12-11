import React from "react";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/HomeTwoTone";
import "./BUTTON.css";
export default function BUTTON(props) {
  return (
    <div>
      <div>
        <Button
          style={{
            width: "268px",
            height: "77px",
            color: "white",
            backgroundColor: "#e0b973",
            fontSize: "28px",
          }}
          variant="contained"
        >
          {props.icon && (
            <i className="icon">
              <HomeIcon style={{ color: "white", fontSize: "35px" }} />
            </i>
          )}

          {props.title}
        </Button>
      </div>
    </div>
  );
}
