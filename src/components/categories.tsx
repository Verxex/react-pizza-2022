//import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setCategoryIndex } from '../redux/slices/filterSlice';
export const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: React.FC = React.memo(() => {
  const { categoriesIndex } = useSelector(selectFilter);
  const dispatch = useDispatch();
  //useWhyDidYouUpdate('Categories', { categoriesIndex });
  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            onClick={() => dispatch(setCategoryIndex(i))}
            key={i}
            className={categoriesIndex === i ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
});
