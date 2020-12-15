import React, { useEffect, useReducer } from "react";
import axios from "axios";
import BUTTON from "../BUTTON.js";
import { BsPlusCircleFill as Pluss } from "react-icons/bs";
import "./Images.css";
const initialState = {
  image: {},
  loading: true,
  error: "",
};

const reduce = (state, action) => {
  switch (action.type) {
    case "OnSuccess":
      return {
        loading: false,
        image: action.payload,
        error: "",
      };
    case "OnFailure":
      return {
        loading: false,
        image: {},
        error: "Something went wrong",
      };

    default:
      return state;
  }
};

function Room(props) {
  var img = props.img;
  return (
    <div>
      <figure className="imgfig-cont">
        <div className="img3">
          <div style={{ backgroundColor: "#14274A" }}>
            <img
              className="img2-cont"
              alt={img.alt_description}
              src={img.urls.raw}
            />
          </div>
          <figcaption className="imgCap2-cont">
            {img.alt_description}
          </figcaption>
          <div className="img2-d">
            <div className="detail">
              <span className="pluss">
                <Pluss />
              </span>
              <div className="room-d"> VIEW ROOM DETAILS</div>
            </div>
            <div className="detail">
              <BUTTON
                title={`$${img.downloads.toString().substr(0, 3)} Avg/night`}
                style={{ fontSize: "21px" }}
              />
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}
function Fas(props) {
  var img = props.img;
  return (
    <div>
      <figure className="imgfig-cont">
        <div>
          <img
            className="img-cont"
            alt={img.alt_description}
            src={img.urls.raw}
          />
          <figcaption className="imgCap-cont">{img.alt_description}</figcaption>
        </div>
      </figure>
    </div>
  );
}

function Images(props) {
  const [state, dispatch] = useReducer(reduce, initialState);

  var count = props.count;
  var query = props.query;

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/random/?count=${count}&query=${query}&client_id=rrFO8buP5ewE16RTzo_YGNnzfTtVUMKOhRSHxYwy-Z8`
      )
      .then((response) => {
        dispatch({ type: "OnSuccess", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "OnFailure" });
      });
  }, [count, query]);

  return (
    <div>
      {state.loading
        ? "Loading!! Please wait"
        : state.image.map((img) =>
            query === "hotel" ? (
              <Fas img={img} key={img.id} />
            ) : (
              <Room img={img} key={img.id} />
            )
          )}
    </div>
  );
}

export default Images;
