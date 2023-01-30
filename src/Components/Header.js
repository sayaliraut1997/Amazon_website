import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';


  function Header() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='header'>
    <Link to="/Home">
    <img
      className="header_logo"
       src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-1024x426.png"/>
    </Link>
      

      <div className='header_search'>
         <input className='header_searchInPut' type="text"/>
         <SearchIcon className="header_searchIcon"/>
      </div>

      <div className='header_nav'>
         <div className='header_option'>
             <span className='header_optionlineOne'>Hello Guest</span>
             <span className='header_optionlineTwo'>SignIn</span>
         </div>
         <div className='header_option'>
             <span className='header_optionlineOne'>Returns</span>
             <span className='header_optionlineTwo'>& Orders</span>
         </div>
         <div className='header_option'>
             <span className='header_optionlineOne'>Your</span>
             <span className='header_optionlineTwo'>Prime</span>  
         </div>
         <Link to ="/Checkout">
         <div className='header_optionBasket'>
         <ShoppingCartIcon/>
         <span className='header_optionlinetwo header_BasketCount'>{basket.length}</span>
         </div>
         </Link>
      </div>

    </div>
  )
}
export default Header