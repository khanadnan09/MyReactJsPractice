import React from "react";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
const Error404 = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      <div className="container-fluid errorpage">
        <Typography variant="h1" component="div" gutterBottom>
          404 ERROR PAGE
        </Typography>
        <Typography variant="h4" component="div" gutterBottom>
          Sorry,This page does not exist...
        </Typography>
        <Button variant="contained" onClick={handleClick} className='home'>
           Back to home page
        </Button>
      </div>
    </>
  );
};

export default Error404;
