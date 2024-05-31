import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'
import './index.css'

const Cart = () => {
  return (
    <CartContext.Consumer>
      {value => {
        const {cartItems, RemoveAll} = value
        const isEmpty = cartItems.length === 0
        // console.log(cartItems);

        return (
          <>
            {isEmpty ? (
              <p className="Cart-heading">You Cart is Empty</p>
            ) : (
              <section className="food-section">
                <ul className="cart-list">
                  {cartItems.map(item => (
                    <CartItem key={item.dishId} dishes={item} />
                  ))}
                </ul>
                <button
                  type="button"
                  className="removeAllBtn"
                  onClick={() => {
                    RemoveAll()
                  }}
                >
                  Remove All
                </button>
              </section>
            )}
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default Cart
