import React from 'react' ;
import './Cart.css'

const Cart = () => {

  return (
    <div className='cart-container'>
    <h1 className='title'>Cart</h1>
    <div>
      {Cart.length === 0 ? (
        <div className='empty-cart'>Your cart is empty</div>
      ) : (
        Cart.map((item, index) => (
          <div className='cart-item' key={index}>
            <img src={item.image} alt={item.title} className='cart-item-img' height={100} style={{ marginRight: '10px' }} />
            <div className='cart-item-title'>{item.title}</div>
            <div className='cart-item-price'>${item.price}</div>
          </div>
        ))
      )}
    </div>
    <div style={{ marginTop: '20px' }}>
      <button className='save-cart'>Save Item</button>
    </div>
  </div>
    
  );
};

export default Cart;
