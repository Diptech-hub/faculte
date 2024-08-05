import NavBar2 from "./navBar2";
import Footer from "./footer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { removeFromCart } from "../features/cart/cart";
import { MdDeleteOutline } from "react-icons/md";
import "../styles/cart.css";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <NavBar2 />
      <p className="shoppingCart">Shopping Cart</p>
      <div className="cartt">
        <div className="cartBody">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="cartFetch">
              {cartItems.map((item) => (
                <div className="cartResult" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="cartTit">
                    <p>{item.title}</p>
                    <p>{item.branch}</p>
                  </div>
                  <div className="cartTit2">
                    <button onClick={() => handleRemove(item.id)}>
                      <MdDeleteOutline />
                      Remove
                    </button>
                    <p>#{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="cartTotal">
          <p>Total</p>
          <p>#{totalPrice}</p>
          <button>Checkout</button>
          <div className="line"></div>
          <div className="promo">
            <p>Promotion</p>
            <input type="text" placeholder="Enter Coupon Code" />
            <br />
            <button>Apply</button>
            <p>
              <span>Promo Code </span> is applied
            </p>
          </div>
        </div>
      </div>
      <div className="cartBtm">
        <p>You might like</p>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
