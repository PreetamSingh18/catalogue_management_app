import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { add, getTotal } from "../store/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import { setRecentProducts } from "../store/productSlice";
import "../CSS/product.css";

const Product = (props) => {
  const { product, show } = props;
  //   const { RecentProd } = useSelector((state) => state.product);
  // console.log(product.id)
  const dispatch = useDispatch();
  const history = useNavigate();
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = (event, product) => {
    event.preventDefault();
    // dispatch(add(product));
    // dispatch(getTotal());
    event.target.style.backgroundColor = "green";
    setIsAdding(true);

    setTimeout(() => {
      setIsAdding(false);
      event.target.style.backgroundColor = "#764abc";
    }, 1000);

    // history.push("/cart");
  };

  const StoreRecentProd = (product) => {
    // dispatch(setRecentProducts(product));
  };
  // console.log(RecentProd);
  //  console.log(product.id);
  return (
    // <Link to={`/product/${product.id}`} key={product.id}>

    <div
      className="card"
      key={product.id}
      onClick={() => StoreRecentProd(product)}
      // disabled="toDisable"
    >
      <img src={product.image} alt="" />
      <h4>
        {product.title.length > 20
          ? product.title.substr(0, 20) + "..."
          : product.title}
      </h4>
      <h6>{product.category}</h6>
      <div className="descp">
        <p>
          {product.description.length > 151
            ? product.description.substr(0, 150) + "..."
            : product.description}
        </p>
        <button>
          <Link to={`/product/${product.id}`} key={product.id}>
            Read More{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Product;

// #ffd334
// #01a2d8
