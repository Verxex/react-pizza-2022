import React from 'react';
import { cartPizza } from '../redux/store';

export const calcTotalCoast = (items: cartPizza[]) => {
  return items.reduce((sum, obj) => {
    return sum + obj.price * obj.count;
  }, 0);
};
