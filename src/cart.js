import React from "react";
import CartItem from "./cartitem";

const Cart = (props)=>{
    const {products }  = props;
    
    
    return(
        <div className="cart">
        {products.map((product)=>{
            return <CartItem products={product} key={product.id} 
        onIncreaseQuantity = {props.onIncreaseQuantity}
        onDecreaseQuantity = {props.onDecreaseQuantity} 
        onDeleteQuantity = {props.onDeleteQuantity}
        lol={props.lol} 
         />
        })} 
     </div>   
    )
}

export default Cart;