import React from "react";
import Netflixcard from "./Netflix-card";
import Netflixdata from './data/Netflixdata.json'
const Netflix = () => {
    // console.log(netflixdata)
  return (
    <div className="container-fluid netflix-crad-container">
      <div className="row netflix-crad-row">
        <div className="col-12 mt-4 mb-5 header__netflix">
          <h2 className="text-center">TOP 10 NETFLIX MOVIES</h2>
        </div>
      {
          Netflixdata.map((data)=>{
          return  <Netflixcard key={data.id}
                      tittle={data.tittle}
                      decription={data.decription}
                      img={data.img}
                      conditions={data.conditions}
                      link={data.link}
                   /> 
          })
      }
        {/* <Netflixcard tittle={netflixdata.tittle} decription={netflixdata.decription}/> */}
      </div>
    </div>
  );
};

export default Netflix;
