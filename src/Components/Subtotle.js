import React from 'react'
import './Subtotle.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "./StateProvider"
import { getBasketTotal } from './reducer';

function Subtotle() {
   const [{basket}, dispatch] = useStateValue();
  return (
    <div className='subtotle'>
    <CurrencyFormat
        renderText={(value)=> (
            <>
                <p>
                    Subtotle ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotle_gift">
                    <input type = "checkbox"/> This order contain a gift
                </small>
            </>
        )} 
        decimalScale={2}
        value = {getBasketTotal(basket)}
        displayType= {"text"}
        thousandSeparator= {true}
        prefix={"rs"}
    />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotle
