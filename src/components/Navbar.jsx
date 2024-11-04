import React from 'react'
import { useSelector } from 'react-redux';
import cartIcon from '../images/bag.png'
import { selectCartCount } from '../redux/cartSlice'; // Import the selector
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const cartCount = useSelector(selectCartCount); 
const navigate=useNavigate();
    function handleOrder(){
navigate('/cart')
    }
  return (
    <div>

<img src={cartIcon} height={40} width={40} alt="" style={{float:'right',cursor:'pointer'}}  onClick={handleOrder}/>
<span style={{float:'right',fontWeight:700}}>{cartCount}</span>
    </div>
  )
}

export default Navbar