import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { setPageNumber } from '../../redux/filter/slice';
import { selectFilter } from '../../redux/filter/selectors';
import { useAppDispatch } from '../../redux/store';

import stules from './pagination.module.scss';

export const Pagination = () => {
  const { pageNumber } = useSelector(selectFilter);
  const dispatch = useAppDispatch();

  return (
    <ReactPaginate
      className={stules.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => {
        dispatch(setPageNumber(event.selected + 1));
      }}
      forcePage={pageNumber - 1}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel="<"
    />
  );
};
