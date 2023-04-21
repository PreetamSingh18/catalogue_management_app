import React, { useEffect, useState } from 'react'
import { fetchCategories } from '../store/categoriesSlice'
// import { fetchCategories } from '../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../CSS/DropDown.css"
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {faAngleDown} from '@fortawesome/free-solid-svg-icons';


const Dropdown = () => {
  const [isActive,setIsActive]=useState(false);
  const {categories}=useSelector((state)=>state.categories);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchCategories());
  },[]);
// console.log(categories)
  return (
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={(e)=>setIsActive(!isActive)}>Categories <FontAwesomeIcon icon={faAngleDown} /></div>
        {
            isActive && (<div className='dropdown-content'>
        { categories && categories.map((category, idx) => (
          <Link to={`category/${category}`} >
            <div key={idx} className="dropdown-item" onClick={(e)=>setIsActive(false)}>
              {category}
            </div>
            </Link>
          ))}
        </div>

            )
        }
        
    </div>
  )
}

export default Dropdown;