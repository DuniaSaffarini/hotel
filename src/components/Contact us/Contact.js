import React from "react";
import "./Contact.css";
import { BiRightArrowAlt as RightArrow } from "react-icons/bi";
export default function Contact() {
  return (
    <div style={{ height: "2100px" }}>
      <div className="contact-us">CONTACT-US</div>

      <div style={{ marginTop: "390px", marginLeft: "207px" }}>
        <div className="contact-title">WE ARE HERE FOR YOU</div>
        <div className="contact-des">
          At Luxury Hotels, we take our customers seriously. Do you have any
          enquiries, compaints or requests, please forward it to our support
          desk and we will get back to you as soon as possible.
        </div>
        <div style={{ marginTop: "182px" }}>
          <div style={{ width: "60%", display: "inline-block" }}>
            <div className="ad1">
              497 Evergreen Rd. Roseville, <br />
              CA 95673
            </div>
            <div className="ad2">
              <b
                style={{
                  display: "inline-flex",
                  verticalAlign: "super",
                }}
              >
                View map{" "}
              </b>
              <b>
                <RightArrow />{" "}
              </b>
            </div>
            <div className="ad3">
              Phone: +44 345 678 903
              <br />
              Email: luxury_hotels@gmail.com
            </div>
          </div>
          <div
            style={{
              verticalAlign: "top",
              width: "40%",
              display: "inline-block",
            }}
          >
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>

              <label>
                Email Address:
                <input type="text" name="email" />
              </label>

              <label>
                Message
                <input style={{ height: "352px" }} type="text" name="message" />
              </label>

              <input type="submit" className="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
