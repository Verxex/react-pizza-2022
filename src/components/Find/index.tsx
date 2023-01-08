import React, { ChangeEvent, useState } from 'react';
import style from './input.module.scss';
import debounce from 'lodash.debounce';
import { setFindStr } from '../../redux/filter/slice';
import { useAppDispatch } from '../../redux/store';

export default function Find() {
  const dispatch = useAppDispatch();
  const [updateFind, setUpdeteFind] = useState('');

  const findInput = React.useRef<HTMLInputElement>(null);
  const onClickClear = () => {
    findInput.current?.focus();
    setUpdeteFind('');
    dispatch(setFindStr(''));
  };
  const onChangeFind = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdeteFind(event.target.value);
    debounseUpdateFind(event.target.value);
  };
  const debounseUpdateFind = React.useCallback(
    debounce((updateFind) => dispatch(setFindStr(updateFind)), 300),
    [],
  );

  return (
    <div className={style.container}>
      <svg className={style.findIcon} viewBox="0 0 70 70">
        <path d="M51.957,49.129l-8.713-8.713c1.75-2.337,2.799-5.229,2.799-8.373c0-7.732-6.268-14-14-14s-14,6.268-14,14s6.268,14,14,14  c3.144,0,6.036-1.049,8.373-2.799l8.713,8.713L51.957,49.129z M22.043,32.043c0-5.514,4.486-10,10-10c5.514,0,10,4.486,10,10  c0,5.514-4.486,10-10,10C26.529,42.043,22.043,37.557,22.043,32.043z" />
      </svg>
      <input
        ref={findInput}
        className={style.input}
        placeholder="поиск пиццы"
        value={updateFind}
        onChange={(event) => onChangeFind(event)}
      />
      {updateFind && (
        <svg onClick={() => onClickClear()} className={style.clearIcon} viewBox="0 0 24 24">
          <path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z" />
        </svg>
      )}
    </div>
  );
}
