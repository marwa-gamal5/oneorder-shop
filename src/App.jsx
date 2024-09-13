import ProductGrid from "./components/Product/ProductGrid";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";


function App() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="app">
      <Navbar />
      <div className={`content `}>
      
        <div className="product-grid-wrapper">
          <ProductGrid />
        </div>
        {cartItems.length > 0 && (
          <>
           
            <div className="cart-divider" />
           
            <div className="cart-wrapper">
              <Cart />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
