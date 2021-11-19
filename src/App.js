import { Component } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import productData from './data/productData'



class App extends Component {
  constructor() {
    super()
    this.state = {
      cart: [],
      numOfItems: 0,
      products: productData[0],
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
        <h1 className='heading'>My Garage Sale</h1>
        <div className='products'>
          {productData.map(({name, price, description, img}) => (
            <div key={name}>
              <h2>{name}</h2>
              <p>${price}</p>
              <p><button onClick={this.addItem}>Add To Cart</button></p>
              <img src={img} alt='{name}' />
              <p>{description}</p>
              </div>
          ))};
        </div>
        <Cart 
        addItem={this.state.cart}
        />
        <Checkout />
       </>
     )
    };
  }

export default App;
