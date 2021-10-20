import React from 'react';
import Navbar from './navbar';
import Cart from './cart';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
    products: [{
      price: 999,
      title: "watch",
      qty: 1,
      img: "https://t4.ftcdn.net/jpg/02/13/64/55/240_F_213645596_loormHyI0s6rtzHALtPVT2Zj2YG218ic.jpg",
      id: 1
    },
    {
      price: 999,
      title: "Mobile phone",
      qty: 1,
      img: "https://cdn-icons-png.flaticon.com/128/254/254638.png",
      id: 2
    },
    {
      price: 999,
      title: "earphone",
      qty: 1,
      img: "https://cdn-icons-png.flaticon.com/128/937/937363.png",
      id: 3
    }
    ]
  }

}
  handleIncreaseQuantity = (product)=> {
    console.log("hey plz inc the qty",product)
    const{products} = this.state;
    const index= products.indexOf(product);

    products[index].qty += 1;
    this.setState({
        products:products
    })
}

handleDecreaseQuantity = (product)=> {
    console.log("hey plz inc the qty",product)
    const{products} = this.state;
    const index= products.indexOf(product);
    if(products[index].qty===0){
        return;
    }

    products[index].qty -=1 ;
    this.setState({
        products:products
    })
}

handleDeleteQuantity = (id)=>{
    
    const{products} =this.state
    const items = products.filter((item)=> item.id!==id)
    this.setState({
        products:items
    })
}

  getCount=()=>{
    const {products } = this.state;
    let count = 0 ;
    products.forEach((product)=>{
       count += product.qty;
    })
    return count;
  }

  getCartTotal =() =>{
    const {products} =this.state;
    let cartTotal = 0;
    products.map((product)=>{
      
      cartTotal = cartTotal + product.qty * product.price;
    })
    return cartTotal;
  }


  render() {
    const {products} = this.state
    return (
      <div className="App">
        <Navbar count={this.getCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          lol={"just a trial "}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handleDeleteQuantity} />
        <div style={ {padding: 10 ,fontSize:20}}>Total:{this.getCartTotal()}</div>

      </div>
    )
  }
}

export default App;
