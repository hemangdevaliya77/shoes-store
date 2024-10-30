import React from 'react'
import shoesData from '../data/shoesData'
import '../styles/product.css'

function Running() {
    console.log(shoesData);
  return (
    <div>
        <h3>Running</h3>
        <ul className='shoes-grid'>


{shoesData.map((item,index)=>(
    <>
    
    <li key={index} className='shoe-item'>


    <img src={item.image} height={700} width={700} alt="" />
    <h3>{item.name}</h3>
    <p>Available Size: {item.sizes.join(',')}</p>
    <p>Available Colors: {item.colors.length}</p>
<button>Add To Cart</button>
    </li>
    </>
))}  
        </ul>

    </div>
  )
}

export default Running