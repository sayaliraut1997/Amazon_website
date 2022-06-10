
import React, { useState, useCallback } from "react";
import Modal from "@netojose/react-modal";
// import ReactDOM from "react-dom";
import "./Subtotle.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { Link } from "react-router-dom";

function Subtotle() {
  const [{ basket }, dispatch] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const cartValue = getBasketTotal(basket)
  const isCartValue = false;
  const handleRandomNum = () => {
    alert(Math.floor(Math.random())*10000);

    // setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  return (
    <div className="subtotle">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotle ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotle_gift">
              <input type="checkbox" /> This order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"rs"}
      />
      {/* <button>Proceed to Checkout</button>
      <button onClick={handleRandomNum}>Proceed to 2</button> */}
      {cartValue > 0 ? (
        <input type="button" id="button1" value="Proceed to checkout" onClick={openModal} />
      ) : (
        <Link to="/Home">
          <input type="button" id="button2" value="continue shopping" />{" "}
        </Link>
      )}

      <Modal className="modal" isOpen={isOpen} onRequestClose={closeModal}>
        <p className="para" align="center">Congratulation your order has been placed successfully</p>
        <p align="center"> Your order id is: {Math.floor(Math.random()*100000000)}</p>
        <p align="center">value is {cartValue}</p>
        <input  align="center" type="button"   id="button3" value="Ok" onClick={closeModal} />
      </Modal>
    </div>
  );
}

export default Subtotle;
