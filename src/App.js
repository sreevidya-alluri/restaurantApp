import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import FoodList from './components/FoodList'

import LoginPath from './components/LoginPath'

import CartContext from './context/CartContext'

import ProtectedRoute from './components/ProtectedRoute'
import Cart from './components/Cart'
import Header from './components/Header'

class App extends Component {
  state = {cartItems: []}

  addCartItem = dish => {
    const {cartItems} = this.state

    const product = cartItems.find(item => item.dishId === dish.dishId)
    console.log(product)
    if (!product) {
      this.setState(prevState => ({
        cartItems: [...prevState.cartItems, dish],
      }))
    } else {
      this.IncreaseCartItems(dish)
    }
  }

  removeCartItem = dish => {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.filter(
        item => item.dishId !== dish.dishId,
      ),
    }))
  }

  IncreaseCartItems = dish => {
    const {cartItems} = this.state

    const product = cartItems.find(item => item.dishId === dish.dishId)
    console.log(product)
    if (!product) {
      this.setState(prevState => ({
        cartItems: [...prevState.cartItems, dish],
      }))
    } else {
      this.setState(prevState => ({
        cartItems: prevState.cartItems.map(item => {
          if (item.dishId === product.dishId) {
            return {...item, count: item.count + 1}
          }
          return item
        }),
      }))
    }
  }

  DecreaseCartItems = dish => {
    const {cartItems} = this.state
    const product = cartItems.find(item => item.dishId === dish.dishId)
    if (product.count >= 1) {
      this.setState(prevState => ({
        cartItems: prevState.cartItems.map(item => {
          if (item.dishId === product.dishId) {
            return {...item, count: item.count - 1}
          } else {
            return item
          }
        }),
      }))
    } else {
      this.setState(prevState => ({
        cartItems: prevState.cartItems.filter(
          item => item.dishId !== product.dishId,
        ),
      }))
    }
  }

  RemoveAll = () => {
    this.setState({cartItems: []})
  }

  render() {
    const {cartItems} = this.state

    return (
      <CartContext.Provider
        value={{
          cartItems,
          IncreaseCartItems: this.IncreaseCartItems,
          DecreaseCartItems: this.DecreaseCartItems,
          RemoveAll: this.RemoveAll,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
        }}
      >
        <>
          <Header />
          <Switch>
            <Route exact path="/login" component={LoginPath} />
            <ProtectedRoute exact path="/" component={FoodList} />
            <ProtectedRoute exact path="/cart" component={Cart} />
          </Switch>
        </>
      </CartContext.Provider>
    )
  }
}

export default App

// import { Component } from "react";

// import Header from "./components/Header";

// import FoodList from "./components/FoodList";

// import CartContext from "./context/CartContext.js";

// class App extends Component {
//   state = { cart_items: 0 };
//   Increase_cart_items = () => {
//     this.setState((prevState) => ({
//       cart_items: prevState.cart_items + 1,
//     }));
//   };
//   Decrease_cart_items = () => {
//     const { cart_items } = this.state;
//     this.setState((prevState) => {
//       if (cart_items !== 0) {
//         return { cart_items: prevState.cart_items - 1 };
//       }
//     });
//   };
//   render() {
//     const { cart_items } = this.state;
//     return (
//       <CartContext.Provider
//         value={{
//           cart_items,
//           Increase_cart_items: this.Increase_cart_items,
//           Decrease_cart_items: this.Decrease_cart_items,
//         }}
//       >
//         <>
//           <Header />
//           <FoodList />
//         </>
//       </CartContext.Provider>
//     );
//   }
// }

// export default App;
