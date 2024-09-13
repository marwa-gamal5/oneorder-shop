
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../../redux/cartSlice";
import styles from "./CartItem.module.css"; 

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div style={{display:'flex' ,gap:'10px'}}>

      
       <img src={item.image} alt={item.title} className={styles.image} />
       <div>
        
      </div>
      <div>
      <div className={styles.imageTitle}>
       
        <h4 style={{ margin: 0 }}>{item.title}</h4>
      </div>
      <div className={styles.details}>
        <p style={{ margin: 0 }}>{item.price} EGP</p>
        <div className={styles.controls}>
          <button onClick={() => dispatch(decrementQuantity(item.id))} className={styles.button}>-</button>
          <span className={styles.quantity}>{item.quantity}</span>
          <button onClick={() => dispatch(incrementQuantity(item.id))} className={styles.button}>+</button>
        </div>
        {/* <button onClick={() => dispatch(removeFromCart(item.id))} className={styles.button}>Remove</button> */}
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default CartItem;
