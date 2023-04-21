import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import { useNavigate } from 'react-router-dom';
import "../CSS/Heropage.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,  } from "@fortawesome/free-solid-svg-icons";

const HeroPage = () => {
    const navigate = useNavigate();
const [userData,setUserData]=useState({
    username:"",
    email:""
})

 const handleInput=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setUserData({...userData,[name]:value});
 }
 const handleSubmit = ()=>{
  if(userData.username.length==0){
    alert("Enter User Name");
    return;
  }
  if(userData.email.length==0){
    alert("Enter Email id");
    return;
  }
    localStorage.setItem('Name',userData.username);
    localStorage.setItem('Email',userData.email);
    // console.log(localStorage.getItem('Name'));
    
    navigate('/home');
   
 }

  return (
    <div className="Hero">
    <form>

      <div>
        <input
          type="text"
          placeholder="UserName"
          required
          value={userData.username}
          onChange={handleInput}
          name="username"
          id="username"
        //   required
        //   validate={required}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="User Email id"
        //   value={userData.email}
        value={userData.email}
          onChange={handleInput}
          name="email"
          id="email"
          required
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" 
         
        />
      </div>
       {/* <input type="submit" value="Proceed" onClick={handleSubmit}  required=""/> */}
      <div>
        <button onClick={handleSubmit}>Proceed <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </form>
    </div>
  );
};

export default HeroPage;
