
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from './ProductCard.module.css';
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  const handleAddToCart = () => {
    dispatch(addToCart(product));

 
    MySwal.fire({
      icon: "success",
      // title: "🎉 Product Added!",
      html: `<strong>${product.title}</strong> has been added to your cart successfully.`,
      background: "#f4f6f9", 
      iconColor: "#2EFF93FF",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      position: "top-end",
      toast: true,
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        htmlContainer: "custom-swal-html",
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  };

  return (
    <div   className={styles.productCard}>
      <div className={styles.priceBadge}>{product.price} EGP</div>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.title} />
      </div>
      <div  className={styles.productInfo}>
        <h4 className={styles.productTitle}>{product.title}</h4>
        <button className={styles.addBtn} onClick={handleAddToCart}>
          ADD +
        </button>
      </div>
    </div>
  );
};

export default ProductCard