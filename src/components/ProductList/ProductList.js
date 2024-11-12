import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {fetchProducts}from '../../redux/slices/productSlice';
import './Productlist.css'


const ProductList = () => {
  const dispatch = useDispatch();
  const {products, loading, error } = useSelector((state) => state.products);
    console.log(products, '==products')
  useEffect(() => {
   
    dispatch(fetchProducts());
  
  }, [dispatch]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error..</div>;

  return (
       <div className='product-container'>
       <div className="product-list">
        {products.map((product) => (
          <div className='products' key={product.id} style={{ width: '18rem' }}>
            <img src={product.image} alt={product.title} height={150}/>
              <div className='card-title'>{product.title}</div>
              <div className='card-description'>{product.description}</div>
              <div className='price'>${product.price}</div>
              <Link to={`/product/${product.id}`}>
            <button>
              view more
            </button>
          </Link>
           </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
