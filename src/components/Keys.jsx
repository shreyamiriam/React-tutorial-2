import React from 'react'
const products=[
  {id:1,name:"Laptop",brand:"Dell",qty:1},
  {id:2,name:"Laptop",brand:"HP",qty:1},
  {id:3,name:"Laptop",brand:"Lenovo",qty:1}


]

function Keys() {
  return (
    <div>
      {products.map((product)=>(
          <div className="bg-success text-white m-2" key={product.id}>
          <h1>{product.name}</h1>
          <h3>Brand:{product.brand}</h3>
          <h4>Qty:{product.qty}</h4>
          <button type="button">+</button>
          </div>




      ))}
    
    </div>
  )
}

export default Keys