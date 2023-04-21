import React, { useState } from "react";
import "../CSS/PieChart.css";
import { fetchCategories } from '../store/categoriesSlice'
import { fetchProducts } from "../store/productSlice";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);



const PieChart = () => {
  const {categories}=useSelector((state)=>state.categories);
  const dispatch=useDispatch();
  const { data: products} = useSelector((state) => state.product);
  useEffect(()=>{
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  },[]);
  // const arr = Array.from({length: categories.length}).fill({name:"",count:0});
  let arr=[{name:"",count:0}];
  console.log(arr);
  // products.map((product)=>{
  //   const val=product.category;
  //   console.log(product.category);

  // });
  const final = {};
for (const { category } of products) {
  final[category] = (final[category] || 0) + 1;
};
  console.log(final);
 const cate=[];
 const quantity=[];
 const Name=Object.keys(final);
 const Quantity=Object.values(final);
 console.log(Name);
 console.log(Quantity);

  
  const [popup,setPopUp]=useState(false);
  const handlePopup =()=>{
    setPopUp(!popup);
  }
  const data = {
      labels: Name,
      datasets: [
        {
          label: 'Quantity',
          data:Quantity ,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };




  return (

    <div>
      <div className="btn-Analyze">
        <button className="Analyze" onClick={handlePopup}>Analyze</button>
      </div>
      {popup ?
      <div className="popup">
        <div className="popup-cont">
          <button className="close-btn1" onClick={handlePopup}>X</button>
        </div>
        <div className="chart-box">
          <div className="chart">
          <Pie data={data} width={"400px"} height={"400px"}/>
          </div>
        </div>
      </div> :""}
    </div>
  );
};

export default PieChart;
