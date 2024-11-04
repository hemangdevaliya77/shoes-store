import React from 'react'
import shoesData from '../data/shoesData'
import '../styles/product.css'
import { useDispatch} from 'react-redux'
import { addToCart } from '../redux/cartSlice';

function Running() {
    
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
      dispatch(addToCart({ id: item.id, name: item.name, image: item.image ,price:item.price,shoesSize:item.sizes}));
      
  };

  const runningShoes=shoesData.filter((item)=>item.type==="Running")
    return (
    <div>
        <h2 style={{marginLeft:'2rem'}}>Running Shoes</h2>
        <ul className='shoes-grid'>


{runningShoes.map((item,index)=>(
    <>
    
    <li key={index} className='shoe-item'>


    <img src={item.image} height={700} width={700} alt="" loading='lazy' />
    <h3>{item.name}</h3>

    <p> {item.colors.length} Colour</p>
    <p style={{fontWeight:800,color:'black',fontSize:'1.2rem'}}>Price: ${item.price}</p>
<button className='add-cart-btn'  onClick={() => handleAddToCart(item)}>Add To Cart</button>
    </li>
    </>
))}  
        </ul>

    </div>
  )
}

export default Running