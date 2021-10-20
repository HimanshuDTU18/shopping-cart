import React from "react";

const CartItem = (props)=>{

    const {products} = props;
    
    return(
        <div className="cart-item">
        <div className="left-block">
            <img style={styles.image} src={products.img} />
        </div>
        <div className="right-block">
            <div style={{ fontSize: 25 }}>{products.title}</div>
            <div style={{ color: '#777' }}>{products.price}</div>
            <div style={{ color: "#777" }}>{products.qty}</div>
            <div className="cart-item-actions">
               <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="inc" className="action-icons" onClick={()=> props.onIncreaseQuantity(products)}  />
                {/* onclick= this.increaseQuantity.bind(this)*/ }
                <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="dec" className="action-icons" onClick={()=> props.onDecreaseQuantity(products)} />
                <img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="del" className="action-icons" onClick={()=> props.onDeleteQuantity(products.id)} />  
                <div>{props.lol}</div>                                                                                                          
            </div>
        </div>
    </div>
);
}


const styles = {
image: {
height: 110,
width: 110,
borderRadius: 4,
backgroundColor: '#ccc'
}
}
    
export default CartItem;
