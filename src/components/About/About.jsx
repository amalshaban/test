import React, { useState } from 'react'
import Experience from '../Experience/Experience';

export default function About() {
  let [products, setProducts] = useState([
    {
      id: 1,
      name: "T-Shirt",
      description: "A comfortable and stylish T-Shirt",
      price: 19.99,
    },
    {
      id: 2,
      name: "Sweatshirt",
      description: "A warm and cozy sweatshirt",
      price: 29.99,
    },
    {
      id: 3,
      name: "Mug",
      description: "A perfect mug for your morning coffee",
      price: 9.99,
    },
    {
      id: 4,
      name: "Hat",
      description: "A stylish hat to complete your outfit",
      price: 14.99,
    },
    {
      id: 5,
      name: "Water Bottle",
      description: "A reusable water bottle to stay hydrated",
      price: 12.99,
    },
    {
      id: 6,
      name: "Notebook",
      description: "A handy notebook for your notes and ideas",
      price: 7.99,
    },
    {
      id: 7,
      name: "Pen",
      description: "A smooth-writing pen for all your writing needs",
      price: 2.99,
    },
    {
      id: 8,
      name: "Backpack",
      description: "A sturdy backpack for carrying your essentials",
      price: 39.99,
    },
    {
      id: 9,
      name: "Phone Case",
      description: "A stylish case to protect your phone",
      price: 19.99,
    },
    {
      id: 10,
      name: "Speaker",
      description: "A portable speaker for your music",
      price: 49.99,
    },
  ]);
  

const deleteProduct = (currentProduct) =>{
let currentIndex = products.indexOf(currentProduct);
products.splice(currentIndex, 1);
console.log(products)

let newArray = [...products]
setProducts(newArray);
}
  return (
    <div className='bg-danger text-center text-light p-4'>
<h3 >Using Map method and props practice</h3>
<div className='container'>
  <div className='row'>
    {
      products.map((product, id) =>(
<Experience key={id} product={product} deleteProduct={deleteProduct}/>
))
}
  </div>

</div>
    </div>
    
  )
}
