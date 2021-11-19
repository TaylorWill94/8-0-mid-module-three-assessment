import productData from "../data/productData";

const Products = (props) => {
    return (
        <div className='products'>
          {productData.map(({name, price, description, img}) => (
            <div key={name}>
              <h2>{name}</h2>
              <p>${price}</p>
              <p><button onClick={props.addItem}>Add To Cart</button></p>
              <img src={img} alt='{name}' />
              <p>{description}</p>
              </div>
          ))};
        </div>
    );
}

export default Products;