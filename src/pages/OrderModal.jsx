// Modal.js
import React from 'react';
import '../styles/modal.css'; // Add your CSS styles

const OrderModal = ({ isOpen, onClose, onSubmit, cartItems,selectedSize }) => {
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [paymentMethod, setPaymentMethod] = React.useState('');

    let orderDate=new Date().toLocaleString()
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, phone, address, paymentMethod,billAmount,orderDate });

    };
    
    let billAmount=cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {/* <button className="close-btn" onClick={onClose}>×</button> */}
                <h2>Order Summary</h2>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div>
                        <label>Delivery Address:</label>
                        <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div>
                        <label>Payment Method:</label>
                        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
                            <option value="">Select...</option>
                            <option value="creditCard">Credit Card</option>
                            <option value="paypal">PayPal</option>
                            <option value="cashOnDelivery">Cash on Delivery</option>
                        </select>
                    </div>
                    <h3>Order Items:</h3>
                    <ul>
                        {cartItems.map(item => (
                            <>
                            
                            <li key={item.id}><strong>Name:</strong>{item.name} - <strong>Price</strong> ${item.price.toFixed(2)} x {item.quantity}   <strong>Size:</strong> {selectedSize[item.id]||"N/A"}</li>
                            {/* <li style={{listStyleType:'none'}}></li> */}
                            </>
                        ))}
                     
                    </ul>
                    <p>Time: {orderDate}</p>
                    <h3>Total Bill: ${billAmount}</h3>
                    <button type="submit">Submit Order</button>
                    <button type="submit" onClick={onClose} className='close-btn'>Close</button>
                </form>
            </div>
        </div>
    );
};

export default OrderModal;
