import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import './index.css'
import CartContext from '../../context/CartContext'

const Header = () => (
  <CartContext.Consumer>
    {value => {
      const {cartItems} = value
      return (
        <header>
          <div className="nav-container">
            <nav className="nav-bar">
              <Link to="/" style={{textDecoration: 'none'}}>
                <h1 className="restaurant-name">UNI Resto Cafe</h1>
              </Link>

              <div className="my-order-container">
                <p>My Orders</p>
                <Link to="/cart" style={{textDecoration: 'none'}}>
                  <AiOutlineShoppingCart className="cart-icon" />
                </Link>

                <p className="cart-number">{cartItems.length}</p>
              </div>
            </nav>
          </div>
        </header>
      )
    }}
  </CartContext.Consumer>
)

export default Header

// import { AiOutlineShoppingCart } from "react-icons/ai";

// import "./index.css";
// import CartContext from "../../context/CartContext";

// const Header = () => {
//   return (
//     <CartContext.Consumer>
//       {(value) => {
//         const { cart_items } = value;
//         return (
//           <header>
//             <div className="nav-container">
//               <nav className="nav-bar">
//                 <h1 className="restaurant-name">UNI Resto Cafe</h1>
//                 <div className="my-order-container">
//                   <p>My orders</p>
//                   <AiOutlineShoppingCart className="cart-icon" />
//                   <span className="cart-number">{cart_items}</span>
//                 </div>
//               </nav>
//             </div>
//           </header>
//         );
//       }}
//     </CartContext.Consumer>
//   );
// };

// export default Header;
