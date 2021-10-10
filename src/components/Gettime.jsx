import React, {useState} from "react";

const Gettime = () => {
    const [time, settime] = useState("Get Your local time")
  const updatetime = ()=>{
   let d = new Date().toLocaleTimeString()
    settime(d)
  }
  return (
    <div className="time__container">
      <div className="time__box">
        <h1>{time}</h1>
        <button className="btn btn-warning btn-time btn-sm" onClick={updatetime}>
          Get Local Time
        </button>
      </div>
    </div>
  );
};

export default Gettime;
