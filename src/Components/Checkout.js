import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotle from './Subtotle'
import {useStateValue} from './StateProvider';


function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
    
        <div className='checkout_left'>
          <img className='checkout_ad'
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/Headers/clearance-pc.jpg"
          />
         <div>
             <h2 className='checkout_title'>Your Shopping Basket
             </h2>
             
             {/* <CheckoutProduct
                id= '111223'
                title= 'this is test'
               image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg"
                price={199.9}
                rating={5}
              /> */}
             
             {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
             ))}

         </div> 
        </div>
        <div className='checkout_right'>
             <Subtotle/>
         </div>
    </div>
  )
}

export default Checkout
