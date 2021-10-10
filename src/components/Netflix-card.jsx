import React from "react";
import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
const Netflixcard = (props) => {
  return (
    <div className="col-12 col-md-4 col-lg-3 netflix__col">
      <div className="card netflix__card bg-dark">
        <div
          className="card__img"
          style={{ height: "300px", overflow: "hidden" }}
        >
          <img
            src={props.img}
            className="card-img-top"
            alt="..."
            style={{ height: "300px" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-white">{props.tittle}</h5>
          <p className="card-text desc__card" style={{ fontSize: "15px" }}>
            {props.decription}
          </p>
          <p className="card-text" style={{ fontSize: "12px" }}>
            {props.conditions}
          </p>
          <a
            href={props.link}
            target="__blank"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="error">
              Watch Now
              <PlayCircleOutlineIcon className="play__icon" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Netflixcard;
