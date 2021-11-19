const Checkout = () => {
    return (
        <div className='checkout'>
        <h2>Checkout</h2>
        <form id='checkout'>
          <label>
            First Name
          <input type='text'>
          </input>
          </label>
          <label>
            Last Name
            <input type='text'>
            </input>
          </label>
          <label>
            Email
            <input type='text'>
            </input>
          </label>
          <label>
            Credit Card
            <input type='text'>

            </input>
          </label>
          <label>
            Zip Code
            <input type='text'>

            </input>
          </label>
          <button>Buy Now</button>
        </form>
      </div>
    )
}


export default Checkout