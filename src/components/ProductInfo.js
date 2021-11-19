const ProductInfo = (props) => {
    return (
        <div className='product-info'>
            <p>{props.car.name}: ${props.car.price}</p>
        </div>
    )
}


export default ProductInfo;