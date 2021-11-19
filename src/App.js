import { Component } from "react";
import "./App.css";
import Cart from "./components/Cart";
import productData from './data/productData'



class App extends Component {
  constructor() {
    super()
    this.state = {
      cart: [],
      numOfItems: 0,
      products: productData,
    };
  };

addItem = () => {
 this.setState({
   cart: [this.state.products,...this.state.cart]
 })
}




   render() {
    
      
   return (
      <>
        <h1>My Garage Sale</h1>
        <div className='products'>
          {productData.map(({name, price, description, img}) => (
            <div key={name}>
              <h2>{name}</h2>
              <p>${price}</p>
              <p><button>Add To Cart</button></p>
              <img src={img} alt='{name}' />
              </div>
          ))}
        </div>
        <Cart />
       </>
     )
  
    };
  }

export default App;
