import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css"
import Dropdown from "./Dropdown";
// import { useSelector } from "react-redux";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCartShopping , faBars,faXmark, faBagShopping} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [openMenu,setOpenMenu]=useState(false);
  const UserName=localStorage.getItem("Name");
  const UserEmail= localStorage.getItem('Email');
  
  console.log(UserEmail)
//   const {cartTotalQuantity} = useSelector((state) => state.cart);
  return (
    <div className={openMenu?"NavBox active":"NavBox"} >
    {/* <img src={require("../img/ShopMore (1).png")} className="logo"/> */}
      {/* <span className="logo"><span style={{color:"#692ccb",fontWeight:800, fontSize:"40px"}}>S</span>hopping</span> */}
      <div className="NavItems">
      <div className="Details">
      <h4>
        {UserName}
      </h4>
      <h4>
        {UserEmail}

      </h4>
      </div>
      <div className="Drop-Box">

        <Dropdown/>
      </div>

      </div>
      {/* <div className="NavItems" >
        <Link className="navLink" to="/" onClick={()=>setOpenMenu(false)}>
          Home
        </Link>
        
        
      </div> */}
     
        <div className="mobile-Navbar">
        {/* <FontAwesomeIcon icon={faBars} className="menu-outline mobile-nav-icon" onClick={()=>setOpenMenu(true)} /> */}
        {/* <FontAwesomeIcon icon={faXmark} className="close-outline mobile-nav-icon" onClick={()=>setOpenMenu(false)}/> */}

        </div>

    </div>
  );
};

export default Navbar;