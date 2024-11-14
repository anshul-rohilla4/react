import React from 'react'

const cart=["4k Screen","4x32 gb RAM","g KB","R9 7600H"];


const Cart00 = () => {


  return (
    <div>
      <h2>Cart 🤸</h2>
      {cart.length>0 ? `you have ${cart.length} items in your cart` : ""}

      {cart.length>0 ? <Products/> :""}
    </div>
    
  )
}

const Products=()=>{

  return(
    <div>
      <h2>Products</h2>
      <ul>
        {cart.map((item)=>
        <li key={item}>{item}</li>
        )}
      </ul>
    </div>
  )
}


export default Cart00