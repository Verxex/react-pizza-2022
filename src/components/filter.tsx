import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { setDirection, setSort } from '../redux/filter/slice';
import { selectFilter } from '../redux/filter/selectors';
import { useAppDispatch } from '../redux/store';
import { sortIndexType } from '../redux/filter/types';

export const Sortlist: sortIndexType[] = [
  { name: 'популярности', sortBy: 'rating' },
  { name: 'цене', sortBy: 'price' },
  { name: 'алфавиту', sortBy: 'title' },
];
const Filter: React.FC = React.memo(() => {
  const dispach = useAppDispatch();
  const { direction, sortIndex } = useSelector(selectFilter);
  const [sortVisible, SetSortVisible] = useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  //проверяем был ли клик вне области sort при открытом меню. Если был то закрываем меню
  React.useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        SetSortVisible(false);
      }
    };
    document.body.addEventListener('click', onClickOutside);
    return () => {
      document.body.removeEventListener('click', onClickOutside);
    };
  }, []);

  const onClickSort = (index: sortIndexType) => {
    dispach(setSort(index));
    SetSortVisible(false);
  };

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <div onClick={() => dispach(setDirection(!direction))} className="sort__icon">
          {direction ? (
            <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z" />
            </svg>
          ) : (
            <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224z" />
            </svg>
          )}
        </div>
        <b>Сортировка по:</b>
        <span onClick={() => SetSortVisible(!sortVisible)}>{sortIndex.name}</span>
      </div>
      {sortVisible && (
        <div className="sort__popup">
          <ul>
            {Sortlist.map((obj, i) => (
              <li
                onClick={() => onClickSort(obj)}
                key={i}
                className={sortIndex.sortBy === obj.sortBy ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Filter;
//<div style={sortVisible ? {} : { display: 'none' }} className="sort__popup"> способ отобразить через стили
// второй способ - можно скрывать через тернарный оператор { sortVisible ? () : '' }
