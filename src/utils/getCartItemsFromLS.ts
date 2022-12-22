import React from 'react';
import { cartPizza } from '../redux/store';
import { calcTotalCoast } from './calcTotalCoast';

export const getCartItemsFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = (data ? JSON.parse(data) : []) as cartPizza[];
  const totalCoast = items ? calcTotalCoast(items) : 0;
  return { items, totalCoast };
};
