import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import styles from "./Cart.module.css"; 
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useMemo } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  // Use useMemo to optimize total amount calculation
  const totalAmount = useMemo(() => 
    cart.reduce((total, item) => total + item.price * item.quantity, 0), 
    [cart]
  );

  
  const handleClearCart = () => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "Do you want to clear all items from the cart?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
      }
    });
  };

  return (
    <div className={styles.cart}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Items</h2>
        {cart.length > 0 && (
          <button className={styles.clearButton} onClick={handleClearCart}>
            Clear
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <h3 className={styles.totalButton}>Pay {totalAmount} EGP</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
