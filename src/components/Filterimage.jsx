import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import imgdata from "./data/Imgdata.json";
import Imagecomponent from "./Imagecomponent";
const Filterimage = () => {
  const [images, setimages] = useState(imgdata);

  const checkfilter = (clickedimg) => {
    const updateimages = imgdata.filter((dataimg) => {
      return dataimg.ctaegory === clickedimg;
    });
    setimages(updateimages);
  };

  return (
    <>
      <div className="container-fluid img_cont">
        <div className="row">
          <div className="col-12 text-center mb-1 mt-5">
            <Typography variant="h4" gutterBottom component="div">
              React Js Image-Gallery
            </Typography>
          </div>
          <div className="col-12">
            <div className="container min-cont">
              <div className="row justify-content-center">
                <div className="col-10 col-md-12 col-md-10 col-lg-9 my-2 buttons_group flex-wrap">
                  <Button variant="contained" color="secondary" onClick={() => {
                     setimages(imgdata);
                    }}>
                    All
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      checkfilter("Car");
                    }}
                  >
                    Cars
                  </Button>
                  <Button variant="contained" color="secondary"onClick={() => {
                      checkfilter("bike");
                    }}>
                    Bikes
                  </Button>
                  <Button variant="contained" color="secondary"onClick={() => {
                      checkfilter("truck");
                    }}>
                    Trucks
                  </Button>
                </div>

                {images.map((imdata) => {
                  return <Imagecomponent imgsrc={imdata.img} key={imdata.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filterimage;
