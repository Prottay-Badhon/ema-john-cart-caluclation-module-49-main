import React from "react";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./Orders.css"

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const removeItem = (id) => {
    const rest = cart.filter((product) => product.id !== id);
    setCart(rest);
    removeFromDb(id);
  };
  console.log(cart);
  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            removeItem={removeItem}
            key={product.id}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
            <Link to="/inventory">
              <button className="checkout-btn">Placed checkout</button>
            </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
