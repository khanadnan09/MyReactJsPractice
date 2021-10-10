import React, { useState } from "react";

const Digitalclock = () => {
  const [time, settime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
      let d = new Date().toLocaleTimeString();
      settime(d);
  }, 1000);

  return (
    <div className="Digitalclock__container">
      <div className="Digitalclock__box">
        <h1>{time}</h1>
      </div>
    </div>
  );
};

export default Digitalclock;
