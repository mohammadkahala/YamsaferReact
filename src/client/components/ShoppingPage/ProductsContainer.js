import React, { useContext } from 'react';
import { ShoppingContext } from './ShoppingPage';

const productsList = require('../../products');

const Product = ({ product }) => {
  const { addItem } = useContext(ShoppingContext);

  return (
    <div className="product">
      <div className="product__name">{product.name}</div>
      <img className="product__image" src={product.imagePath} alt="phone photo"/>
      <button className="product__add-button" onClick={() => addItem(product)}>ADD</button>
    </div>
  )
};

const ProductsContainer = () => {
  return (
    <div className="products-container">
      {productsList.map(product =>
        <Product product={product} />
      )}
    </div>
  )
};

export default ProductsContainer;