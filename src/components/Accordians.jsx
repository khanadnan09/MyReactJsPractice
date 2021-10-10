import React from "react";
import Accordianitem from "./Accordianitem";

const Accordians = () => {

  return (
    <div className="Accordian__conatiner">
      <div className="Accordian__card__body">
       <Accordianitem title={"What is React Js."} description={"React is a free and open-source front-end JavaScript library for building user interfaces or UI components. "}/>
       <Accordianitem title={"What is React Js."} description={"React is a free and open-source front-end JavaScript library for building user interfaces or UI components. "}/>
       <Accordianitem title={"What is React Js."} description={"React is a free and open-source front-end JavaScript library for building user interfaces or UI components. "}/>
      </div>
    </div>
  );
};

export default Accordians;
