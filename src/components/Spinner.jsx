import React from "react";
import loader from "./loader.gif";
const Spinner = () => {
  return (
    <div className="spiner">
      <img src={loader} alt="" />
    </div>
  );
};

export default Spinner;
