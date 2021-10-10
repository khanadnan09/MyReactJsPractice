import React from "react";
import Cartmain from "./Cartmain";
import Cartdata from "./data/Cartdata.json";

const Cart = () => {

  return (
    <div className="cart__container">
      <div className="cart">
        <div className="cart__body">
          <h2 className="text-center bg-light p-3 mb-4 cart__heading">
            E-commerce cart using react js
          </h2>
          <div className="cart__body__main">
            {
            Cartdata.map((cartData) => {
              return (
                <Cartmain
                  key={cartData.id}
                  img={cartData.img}
                  price={cartData.price}
                  name={cartData.name}
                />
              );
            })}
          </div>
          {/* <div className="checkot mt-4 mb-3">
            <h3>Total Price:400300rs</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
