import {createContext} from 'react'

const CartContext = createContext({
  cartItems: [],
  IncreaseCartItems: () => {},
  DecreaseCartItems: () => {},
  RemoveAll: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
})

export default CartContext
