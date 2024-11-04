import React from 'react'
import shoesData from '../data/shoesData'
import '../styles/product.css'
import { useDispatch} from 'react-redux'
import { addToCart } from '../redux/cartSlice';

function Training() {
    
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
      dispatch(addToCart({ id: item.id, name: item.name, image: item.image ,price:item.price,shoesSize:item.sizes}));
      
  };

  const TrainingShoes=shoesData.filter((item)=>item.type==="Training")

    return (
    <div>
        <h2 style={{marginLeft:'2rem'}}>Training and Gym Shoes</h2>
        <ul className='shoes-grid'>


{TrainingShoes.map((item,index)=>(
   
    
    <li key={index} className='shoe-item'>


    <img src={item.image} height={700} width={700} alt="" loading='lazy' />
    <h3>{item.name}</h3>
    {/* <p>Available Size: {item.sizes.join(',')}</p> */}
    <p>Available Colors: {item.colors.length}</p>
    <p>Price: ${item.price}</p>
<button className='add-cart-btn'  onClick={() => handleAddToCart(item)}>Add To Cart</button>
    </li>
   
))}  
        </ul>

    </div>
  )
}

export default Training