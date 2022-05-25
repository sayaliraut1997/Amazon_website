import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider"

function CheckoutProduct({ id, image, title, price, rating}) {
   
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
       type: 'REMOVE_FROM_BASKET',
       id: id,
    })
  }   
  return (
      <>
    <div className='checkoutPoduct'>
      <img className='checkoutProduct_image' src={image}></img>
   

    <div className='checkoutPoduct_info'>
      <p className='checkoutProduct_title'>{title}</p>
      <p className='checkoutProduct_price'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
       <div className='chechoutProduct_Rating'>
         {Array(rating)
           .fill()
           .map((_, i)=>(
              <p>*</p> 
           ))
         }
       </div>
       <button onClick={removeFromBasket}>Remove from Basket</button>
    </div>
    </div>
    </>
  )
}

export default CheckoutProduct
