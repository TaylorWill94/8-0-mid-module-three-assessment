import ProductInfo from "./ProductInfo"

const Cart = (props) => {

    const itemsToDisplay = props.cart.map((car, i) => {
        return <ProductInfo key={i} car={car} />
    })

    return(
        <div className='cart'>
        <h1>Cart</h1>
     {itemsToDisplay}
      <h2>Subtotal:</h2>
          <h2>Tax:</h2>
          <h2>Total:</h2>
          </div>
    )
}


export default Cart