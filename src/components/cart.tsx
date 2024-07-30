import NavBar2 from "./navBar2";
import Footer from "./footer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { removeFromCart } from "../features/cart/cart";
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
      <div className="cartBody">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>Price: #{item.price}</p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cartTotal">
        <p>Total Price: #{totalPrice}</p>
      </div>
      <div className="cartBtm">
        <p>You might like</p>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
