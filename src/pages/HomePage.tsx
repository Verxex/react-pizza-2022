import React from 'react';
import { useSelector } from 'react-redux';
import { setFilter } from '../redux/filter/slice';
import { selectFilter } from '../redux/filter/selectors';
import { useNavigate } from 'react-router-dom';
import * as qs from 'qs';

import { Categories } from '../components/categories';
import Filter, { Sortlist } from '../components/filter';
import { Handler } from '../components/handler';
import { Pagination } from '../components/Pagination';
import { PizzaBlock } from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/PizzaSkeleton';
import { fetchPizzas, selectPizza } from '../redux/slices/fetchSlice';
import { useAppDispatch } from '../redux/store';

function HomePage() {
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false); //первый рендер
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { items, status } = useSelector(selectPizza);

  const { pageNumber, categoriesIndex, sortIndex, direction, findStr } = useSelector(selectFilter);

  const feachPizzas = () => {
    const filter = categoriesIndex > 0 ? `category=${categoriesIndex}` : '';
    const sortBy = sortIndex.sortBy;
    const sortOrder = direction ? `desc` : `asc`;
    const searchBy = findStr ? `search=${findStr}` : '';
    const page = `limit=4&page=${pageNumber}&`;
    dispatch(fetchPizzas({ filter, sortOrder, sortBy, searchBy, page }));
  };
  //если пользователь изменил параметры в URL, считываем параметры из URL и запихиваем их в редакс

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substr(1));
      const sort = Sortlist.find((obj) => params.sortBy === obj.sortBy);
      dispatch(
        setFilter({
          pageNumber: Number(params.pageNumber),
          categoriesIndex: Number(params.categoriesIndex),
          sortIndex: sort || Sortlist[0],
          direction: params.sortOrder === 'desc' ? true : false,
          findStr: findStr,
        }),
      );
      isSearch.current = true;
    }
  }, []);
  //если был первый рендер и изменились параметры url запрашиваем пиццы из бэкенда
  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      feachPizzas();
    }
    isSearch.current = false;
  }, [categoriesIndex, sortIndex, direction, findStr, pageNumber]);
  //если первый рендер проверяем параметры url и сохраняем в редаксе(если не первый рендер тогда не надо вшивать в редакс параметры повторно)
  React.useEffect(() => {
    if (isMounted.current) {
      //считываем пораметры из редакса
      const sortOrder = direction ? `desc` : `asc`;
      const quaryString = qs.stringify({
        sortBy: sortIndex.sortBy,
        categoriesIndex,
        sortOrder,
        pageNumber,
        findStr,
      });
      //запихиваем их в строку в URL
      navigate(`?${quaryString}`);
    }
    isMounted.current = true; //первый рендер был
  }, [categoriesIndex, sortIndex, direction, findStr, pageNumber]);

  const skeletons = [...Array(6)].map((_, i) => <PizzaSkeleton key={i} />);
  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} id={pizza.id} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Filter />
      </div>
      <Handler />
      {status === 'error' ? (
        <div className="content__error">
          <h1>:\</h1>
          <p>К сожалению произошла ошибка. Попробуйте позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
      <Pagination />
    </div>
  );
}

export default HomePage;
