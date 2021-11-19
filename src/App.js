import { Component } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Products from "./components/Products";
import productData from './data/productData'



class App extends Component {
  constructor() {
    super()
    this.state = {
      cart: [],
      products: productData,
    };
  };
 



  addItem = (product) => {
    //console.log(products)
    const { cart, products } = this.state
    const allProducts = products.map((product) => {
      return product.name;
    })
    this.setState({
      cart: [allProducts, ...cart],

    })
  }


  clearCart = () => {
    this.setState({
      cart: [],
      numOfItems: 0
    })
  }

  
  render() {
         
   return (
      <>
        <h1 className='heading'>My Garage Sale</h1>
        
        <Products addItem={this.addItem}/>

        <Cart cart={this.state.cart}/>


        <Checkout />


       </>
     )
    };
  }
  

export default App;
