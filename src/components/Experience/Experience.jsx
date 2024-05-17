import React from 'react'

export default function Experience(props) {

  let {product , deleteProduct} = props;
  return (
    <div className='col-md-3 m-1 p-3 text-left bg-success'>
    <h5>{product.id}</h5>
      <h6>{product.name}</h6>
      <p>{product.description}</p>
      <h5>{product.price}</h5>
  <button onClick={()=>deleteProduct(product)} className='m-2'>Delete</button>
  <button>Update</button>
    </div>
    
  );
}
