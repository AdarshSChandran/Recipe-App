const AddToCart = ({addToCartProduct}) =>{

    let AddToCartTotal =  addToCartProduct.map((item)=>{
        return(
            <li>
                <img src={item.img} alt="" />
                <h5>{item.title}</h5>
            </li>
        )
    })

    return(
        <div className="cart">
            <div className="cart-container">
                <div className="cart-items">
                <li>
                    <h2>Cart Items</h2>
                    {AddToCartTotal} 
                </li>
                </div>
            </div>
        </div>
    )
}

export default AddToCart
                    