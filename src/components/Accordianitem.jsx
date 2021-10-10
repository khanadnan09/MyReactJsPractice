import React, { useState } from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
// import { height, padding } from "@mui/system";
const Accordianitem = (props) => {
//   const [style, setstyle] = useState({height: "0px"});
  const [colapse, setcolapse] = useState(
        {
          height: '0px'
        }
  );
  const toggle = () => {
     
    if (colapse.height === '0px') {
      setcolapse({
        padding: '16px 20px',
        height: 'auto'
      });
    } else {
      setcolapse({
        padding: '0px',
        height: '0px'
      });
    }
    console.log(colapse.height)
  };
  return (
    <>
      <div className="Accordian__item">
        <h4>{props.title}</h4>
        <Button variant="contained" className="myaccord_btn" onClick={toggle}>
          <KeyboardArrowDownSharpIcon />
        </Button>
      </div>
      <div className="Accordian__desc" style={colapse}>
        {props.description}
      </div>
    </>
  );
};

export default Accordianitem;
