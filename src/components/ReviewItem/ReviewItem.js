import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = (props) => {
  const {id, name, quantity, img, price, shipping } = props.product;
  return (
    <div className="review-item">
      <div className="">
        <img src={img} alt="" />
      </div>
      <div className="review-items-detail-container">
        <div className="review-items-detail">
            <h3 title={name}>{name.length>20? name.slice(1,10)+'.....': name}</h3>
            <p>Price: <span>${price}</span></p>
            <p>Shipping-charge: <span>${shipping}</span></p>
            <p>Quantity: {quantity}</p>
        </div>
        <div className="delete-container">
            <button className="delete-btn" onClick={()=>props.removeItem(id)}><FontAwesomeIcon className="delete-icon" icon={faTrashAlt}></FontAwesomeIcon></button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
