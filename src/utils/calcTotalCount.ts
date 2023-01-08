import React from 'react';
import { cartPizza } from '../redux/cart/types';

export const calcTotalCount = (items: cartPizza[]) => {
  return items.reduce((sum, item) => sum + item.count, 0);
};
