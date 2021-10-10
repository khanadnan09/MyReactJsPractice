import React from "react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

const Newsitem = (props) => {
  return (
    <>
      <div className="col-11 col-md-6 d-flex justify-content-center">
        <div className="card newscard mb-3" style={{ maxWidth: " 540px" }}>
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src={
                  !props.urlToImage
                    ? "https://ctkbiotech.com/wp/wp-content/uploads/2018/03/not-available.jpg"
                    : props.urlToImage
                }
                className="img-fluid rounded-start img-news"
                alt=""
              />
            </div>
            <div className="col-md-7">
              <div className="card-body news_item_body">
                <h5 className="card-title">{props.title}</h5>
                <Chip label={!props.source?"Unknown source":props.source} />
                <p className="card-text">{props.description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Published by {!props.author?"Unknown author":props.author} at: {props.publishedAt}
                  </small>
                </p>
                <Button variant="contained" href={props.url} target="_blank">
                  Go to News
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsitem;
