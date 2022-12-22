import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from '../redux/slices/filterSlice';
import { categories } from './categories';

export const Handler: React.FC = () => {
  const { categoriesIndex } = useSelector(selectFilter);
  return <h2 className="content__title">{categories[categoriesIndex]}</h2>;
};
