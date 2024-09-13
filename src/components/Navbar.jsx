
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
export default function Navbar() {
  const cart = useSelector((state) => state.cart.items);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
  return (
    <>
      <nav style={{ 
          borderBottom: '1px solid #CCC5C5FF', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          backgroundColor: 'white', 
          zIndex: 1000, 
          height: '60px' 
      }}>
        <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 50px' }}>
          <h1>S H O P</h1>

          <div style={{ position: 'relative', display: 'inline-block' }}>
          
            <h3 style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '14px', color: 'black' }}>
              {totalItems}
            </h3>

            <CgShoppingCart style={{ fontSize: '25px' }} />
          </div>
        </div>
      </nav>
    </>
  )
}
