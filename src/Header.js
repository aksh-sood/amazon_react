import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function header() {
  return (
    <div className="header">
      <img className="header_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBZsOV_lhvC7eymRovQqQ4bbxGVZ_JfgBWA&usqp=CAU"/>
    <div className="header_search">
        <input type="text" className="header_searchInput"/>
            <SearchIcon className="header_searchIcon"/>
       
    </div>
    <div className="header_nav">
    
    <div className="header_option">
    <span className="header_optionLineOne">Hello</span>
    <span className="header_optionLineTwo">Sign In</span>
    
    </div>
    <div className="header_option">
    <span className="header_optionLineOne">Returns</span>
    <span className="header_optionLineTwo">&amp; Orders</span>
    </div>
    <div className="header_option">
    <span className="header_optionLineOne">Your</span>
    <span className="header_optionLineTwo">Prime</span>
    </div>
 <div className="header_optionBasket">
 <ShoppingCartIcon className="header_basket" />

 </div>
 <div className="header_optionBasket">

 <span className="header_optionLineTwo header_basketCount">5</span>
 </div>
    </div>
    </div>
  )
}

export default header
