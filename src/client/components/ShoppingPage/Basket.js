import React, { useContext } from 'react';
import { ShoppingContext } from './ShoppingPage';

const BasketItem = ({ item }) => {
  const { removeItem } = useContext(ShoppingContext);

  return (
    <div className="basket-item">
      <div className="basket-item__name">{item.name}</div>
      <div className="itemData">{item.quantity}</div>
      <button className="basket-item__remove-button" onClick={() => removeItem(item)}>Remove</button>
    </div>
  )
};

const TotalPrice = ({ basketList }) => {
  let totalPrice = 0;
  for (let item of basketList){
    totalPrice += item.price * item.quantity;
  }

  return <div className="price">Total Price = {totalPrice} $</div>
};

const Basket = ({ basketList }) => {
  return (
    <div className="basket-container">
      <div className="basket">
        <div className="basket-list">
          {
            basketList.length === 0 &&
            <div className="hint">Add Items to Your Basket</div>
          }
          {basketList.map(item =>
            <BasketItem item={item} />
          )}
        </div>
        <TotalPrice basketList={basketList} />
      </div>
    </div>
  )
};

export default Basket;