import React from "react";
// import css from 'css'
const Imagecomponent = (props) => {
  return (
    <>
      <div className="col-11 col-md-6 col-lg-4 mb-3">
        <img
          src={props.imgsrc}
          alt=""
          className="img_fit"
        />
      </div>
    </>
  );
};

export default Imagecomponent;
