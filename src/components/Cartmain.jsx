import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const Cartmain = (props) => {
  const [numcart, setnumcart] = useState(1);
  const [disapear, setdisapear] = useState(false);



  const incrnum = () => {
    setnumcart(numcart + 1);
  };
  const decrnum = () => {
    setnumcart(numcart - 1);
    if (numcart <= "1") {
      setdisapear(true);
    }
  };
  const deleteitem = () => {
    setdisapear(true);
  };
 
  return (
    <>
    
      <div
        className="cart__main"
        style={{ display: disapear ? "none" : "flex" }}
      >
        <img src={props.img} alt="" className="cart__item__img" />
        <div className="product__name">{props.name}</div>
        <div className="product__name d-flex flex-column">
          <span>Actual Price</span>
          {props.price}Rs
        </div>
        <div className="product__name d-flex flex-column">
          <span>Updated Price</span>
          {props.price * numcart}Rs
        </div>

        <div className="cart__counter">
          <Button
            variant="contained"
            color="secondary"
            className="count-input"
            style={{ backgroundColor: "#44476a" }}
            onClick={incrnum}
          >
            <AddIcon />
          </Button>
          <span className="text-center box-in">{numcart}</span>
          <Button
            variant="contained"
            className="count-input"
            style={{ backgroundColor: "#44476a" }}
            onClick={decrnum}
          >
            <RemoveIcon />
          </Button>
        </div>
        <div className="cart__delete">
          <Button
            variant="contained"
            className="count-input"
            style={{ backgroundColor: "#44476a" }}
            onClick={deleteitem}
          >
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cartmain;
