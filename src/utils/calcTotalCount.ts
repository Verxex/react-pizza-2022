import React from 'react';
import { cartPizza } from '../redux/store';

export const calcTotalCount = (items: cartPizza[]) => {
  return items.reduce((sum, item) => sum + item.count, 0);
};
