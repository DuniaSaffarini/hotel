import React from "react";
import "./Footer.css";
import { FaFacebookF as Facebook } from "react-icons/fa";
import { FaInstagram as Instagram } from "react-icons/fa";
import { FaTwitter as Twitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-tri">
          <table className="footer-cont">
            <tbody>
              <tr>
                <td>
                  <div>
                    <div className="Group">
                      <p className="lux">LUXURY</p>
                      <p className="hotels">HOTELS</p>
                    </div>
                    <div className="address">
                      <p style={{ width: "227px" }}>
                        497 Evergreen Rd. Roseville, CA 95673
                      </p>
                      <p style={{ width: "98px" }}> +44 345 678 903</p>
                      <p style={{ width: "98px" }}> luxury_hotels@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="sec">
                    <p style={{ paddingTop: "28px" }}> About Us</p>
                    <p style={{ margin: "40px 0px 40px 0px" }}>Contact Terms</p>
                    <p> Conditions</p>
                  </div>
                </td>
                <td>
                  <div className="sec">
                    <p style={{ paddingTop: "28px" }}>
                      <span style={{ paddingRight: "27px" }}>
                        <Facebook />
                      </span>
                      Facebook
                    </p>
                    <p style={{ margin: "40px 0px 40px 0px" }}>
                      <span style={{ paddingRight: "27px" }}>
                        <Twitter />
                      </span>
                      Twitter
                    </p>
                    <p>
                      <span style={{ paddingRight: "27px" }}>
                        <Instagram />
                      </span>
                      Instagram
                    </p>
                  </div>
                </td>

                <td>
                  <div className="sec">
                    <p style={{ paddingTop: "28px" }}>
                      Subscribe to our newsletter
                    </p>
                    <div className="Email">
                      <span className="add"> Email Address</span>
                    </div>
                    <div className="ok">
                      <div className="ok2">OK</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
